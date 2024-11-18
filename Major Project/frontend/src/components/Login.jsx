import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    console.log(user.email); // The email of the authenticated user
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
