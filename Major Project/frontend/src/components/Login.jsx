import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const LoginSignupPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { loginWithRedirect } = useAuth0();
  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          {isLoginMode ? 'Login' : 'Sign Up'}
        </h1>

        {/* Toggle between Login and Signup */}
        {isLoginMode ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full  text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={switchMode}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{' '}
              return <button onClick={() => loginWithRedirect()}>Log In</button>;
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;
