import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password123');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <section className="font-sans bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Header with Church Logo */}
              <div className="bg-indigo-700 py-8 px-8 text-center relative overflow-hidden">
                  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10"></div>
                  
                  <div className="relative mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                     <img src="/images.png" alt="Church Logo" className="rounded-full" />
                  </div>
                  <h1 className="text-2xl font-bold text-white">Church of Pentecost</h1>
                  <p className="text-indigo-200 mt-1">Management System Portal</p>
              </div>
              
              {/* Login Form */}
              <div className="px-8 py-8">
                  <form id="loginForm" className="space-y-6" onSubmit={handleLogin}>
                      {/* Username Field */}
                      <div className="relative">
                          <input 
                              type="text" 
                              id="username" 
                              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cop-primary focus:ring-2 focus:ring-cop-primary/30 placeholder-transparent" 
                              placeholder="Username"
                              required
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                          />
                          <label 
                              htmlFor="username" 
                              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cop-primary"
                          >
                              Username
                          </label>
                          <div className="absolute right-3 top-3 text-gray-400">
                              <i className="fas fa-user"></i>
                          </div>
                      </div>
                      
                      {/* Password Field */}
                      <div className="relative">
                          <input 
                              type="password" 
                              id="password" 
                              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cop-primary focus:ring-2 focus:ring-cop-primary/30 placeholder-transparent" 
                              placeholder="Password"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                          />
                          <label 
                              htmlFor="password" 
                              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-cop-primary"
                          >
                              Password
                          </label>
                          <div className="absolute right-3 top-3 text-gray-400">
                              <i className="fas fa-lock"></i>
                          </div>
                      </div>
                      
                      {/* Remember Me & Forgot Password */}
                      <div className="flex items-center justify-between">
                          <div className="flex items-center">
                              <input 
                                  id="remember-me" 
                                  name="remember-me" 
                                  type="checkbox" 
                                  className="h-4 w-4 text-cop-primary focus:ring-cop-primary border-gray-300 rounded"
                              />
                              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                          </div>
                          
                          <div className="text-sm">
                              <a href="#" className="font-medium text-[#4f46e5] hover:text-cop-secondary">Forgot password?</a>
                          </div>
                      </div>
                      
                      {/* Submit Button */}
                      <div>
                          <button 
                              type="submit" 
                              className="w-full py-3 px-4 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cop-primary hover:shadow-lg transition-all duration-300 hover:from-cop-secondary hover:to-cop-primary"
                          >
                              Sign In
                          </button>
                      </div>
                  </form>
                  
                  {/* Social Login Divider */}
                  <div className="mt-6">
                      <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                              <span className="px-2 bg-white text-gray-500">Or continue with</span>
                          </div>
                      </div>
                      
                      {/* Social Login Buttons */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                          <button 
                              className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                          >
                              <i className="fab fa-google text-red-500 mr-2"></i> Google
                          </button>
                          
                          <button 
                              className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                          >
                              <i className="fab fa-microsoft text-blue-500 mr-2"></i> Microsoft
                          </button>
                      </div>
                  </div>
                  
                  {/* Registration Prompt */}
                  <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600">
                          Need access?{' '}
                          <a href="#" className="font-medium text-cop-primary hover:text-cop-secondary transition-colors duration-300">Create an account</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Login;
