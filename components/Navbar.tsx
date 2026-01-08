import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User, Search, Smile } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, items } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-emerald-700 font-bold bg-emerald-50 rounded-full px-4 py-1" : "text-stone-600 hover:text-emerald-700 hover:bg-stone-50 px-4 py-1 rounded-full font-semibold";

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b-2 border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center border-2 border-brand-dark group-hover:rotate-12 transition-transform">
              <Smile className="w-6 h-6 text-brand-dark" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-heading font-bold text-xl tracking-tight text-brand-dark">Pack Me Too</span>
              <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">Natural Protection</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-2 items-center font-heading">
            <Link to="/" className={`${isActive('/')} transition-all`}>Home</Link>
            <Link to="/shop" className={`${isActive('/shop')} transition-all`}>Shop</Link>
            <Link to="/wholesale" className={`${isActive('/wholesale')} transition-all`}>Wholesale</Link>
            <Link to="/about" className={`${isActive('/about')} transition-all`}>Our Story</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all">
              <Search className="w-6 h-6" />
            </button>
            <Link to="/login" className="p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all hidden sm:block">
              <User className="w-6 h-6" />
            </Link>
            <button 
              onClick={openCart}
              className="p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all relative group"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 bg-brand-pink text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
                  {items.length}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-2 font-heading">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-lime/20 text-lg font-bold text-brand-dark">Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-lime/20 text-lg font-bold text-brand-dark">Shop Collection</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-lime/20 text-lg font-bold text-brand-dark">Our Story</Link>
            <Link to="/wholesale" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-lime/20 text-lg font-bold text-brand-dark">Wholesale / Corporate</Link>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-lime/20 text-lg font-bold text-brand-dark">Account</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;