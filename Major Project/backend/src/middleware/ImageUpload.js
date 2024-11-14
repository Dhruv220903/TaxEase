import multer from "multer";

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./public/uploads");
  },
  filename: (request, file, callback) => {
    var ext = file.originalname.split(".");
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

const uploads = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      if (req.file) {
        if (
          !req.file.originalname.match(/\.(pdf|jpg|JPG|jpeg|JPEG|png|PNG|svg)$/)
        ) {
          return res.status(400).send({
            status: 400,
            message: "Only allowd pdf|jpg|JPG|jpeg|JPEG|png|PNG|svg",
          });
        } else {
          var path = req.file.filename;

          req.fileurl = path;
          next();
        }
      } else {
        req.fileurl = "";
        next();
      }
    }
  });
};
export default uploads;
