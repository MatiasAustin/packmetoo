import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Smile } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32 relative overflow-hidden">
       {/* Background Blobs */}
       <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-brand-lime/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
       <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-brand-yellow/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-brand-lime flex items-center justify-center mx-auto mb-4 border-2 border-brand-dark transform rotate-3 shadow-lg">
              <Smile className="w-8 h-8 text-brand-dark" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-brand-dark">Welcome Back!</h2>
            <p className="mt-2 text-stone-600 font-medium">Sign in to manage your orders</p>
        </div>

        <div className="bg-white py-8 px-4 shadow-xl shadow-brand-dark/5 sm:rounded-[2rem] sm:px-10 border-2 border-stone-100">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-brand-dark mb-1 font-heading">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-4 py-3 border-2 border-stone-200 rounded-xl bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-brand-lime sm:text-sm font-medium transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-brand-dark mb-1 font-heading">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-4 py-3 border-2 border-stone-200 rounded-xl bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-brand-lime sm:text-sm font-medium transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-stone-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-700 font-medium">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-emerald-600 hover:text-emerald-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Button fullWidth>Sign in</Button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-stone-100" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-stone-500 font-bold">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
               <button className="w-full inline-flex justify-center py-3 px-4 border-2 border-stone-200 rounded-xl shadow-sm bg-white text-sm font-bold text-stone-600 hover:bg-stone-50 hover:border-stone-300 transition-all">
                 Google
               </button>
               <button className="w-full inline-flex justify-center py-3 px-4 border-2 border-stone-200 rounded-xl shadow-sm bg-white text-sm font-bold text-stone-600 hover:bg-stone-50 hover:border-stone-300 transition-all">
                 Apple
               </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm">
              <span className="text-stone-500 font-medium">Don't have an account? </span>
              <Link to="/register" className="font-bold text-emerald-600 hover:text-emerald-500 hover:underline">Create one</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;