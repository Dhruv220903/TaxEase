import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // Redirect to TaxSummary page after successful login
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user.email); // The email of the authenticated user
      navigate('/tax-summary', { state: { email: user.email } }); // Redirect to TaxSummary
    }
  }, [isAuthenticated, navigate, user]);

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
