import multer from "multer";

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./public/uploads");
  },
  filename: (request, file, callback) => {
    const ext = file.originalname.split(".");
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      !file.originalname.match(
        /\.(pdf|jpg|JPG|jpeg|JPEG|png|PNG|svg|webm|mp3|mp4)$/
      )
    ) {
      return callback(
        new Error("Only allowed pdf|jpg|JPG|jpeg|JPEG|png|PNG|svg"),
        false
      );
    }
    callback(null, true);
  },
}).array("files", 10);

const mulitpleUpload = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ status: 400, message: err.message });
    } else {
      if (req.files && req.files.length > 0) {
        const filePaths = req.files.map((file) => file.filename);
        req.fileurls = filePaths;
        next();
      } else {
        req.fileurls = [];
        next();
      }
    }
  });
};

export default mulitpleUpload;
