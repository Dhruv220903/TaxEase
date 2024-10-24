import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'; // Make sure this is the correct path to your App component
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
  domain="dev-24fl7x4drvhi6kxq.us.auth0.com"
  clientId="EaGAHxvaJGqAb3uyXu63DpJhjWwuWo1t"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,

);