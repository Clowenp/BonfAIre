// pages/Login.tsx

import React from 'react';

const Login: React.FC = () => {
  return (
    <div className='bg-blue-600'>
        <div className="flex h-screen justify-center items-center bg-orange-100 ">
        <div className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Login</h2>
            <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 mb-1"
            >
            Login in with Google 
            <img src=''></img>
            </button>
            <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 mb-3"
            >
            Login in with Facebook
            <img src=''></img>
            </button>
            <div className="w-full border-t border-gray-300 text-center mb-4 mt-0">
            
            </div>
            <div className="mb-2">
            <input
                type="email"
                className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
            />
            </div>
            <div className="">
            <input
                type="password"
                className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your password"
            />
            </div>
            <div className="text-blue-500 text-sm mb-2">
            <a href="#">Sign up if you don't have an account</a> | <a href="#">Forgot password</a>
            </div>
            <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 mt-2"
            >
            Sign In
            </button>
        </div>
        </div>
    </div>
  );
};

export default Login;
