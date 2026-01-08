import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center mb-6">
              <span className="text-emerald-950 text-lg font-bold">P</span>
            </div>
            <p className="text-emerald-200/80 mb-6 leading-relaxed">
              Natural protection for the whole family. <br />
              Made simple. Made safely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-emerald-200/80">
              <li><Link to="/shop?cat=kids" className="hover:text-white">Kids Packs</Link></li>
              <li><Link to="/shop?cat=adults" className="hover:text-white">Adult Essentials</Link></li>
              <li><Link to="/shop?cat=pets" className="hover:text-white">Pet Guard</Link></li>
              <li><Link to="/shop?cat=kits" className="hover:text-white">Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-emerald-200/80">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/wholesale" className="hover:text-white">Wholesale</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6">Stay Protected</h4>
            <p className="text-sm text-emerald-200/80 mb-4">Join the pack for 10% off your first order.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-emerald-900/50 border border-emerald-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-emerald-500 text-white placeholder-emerald-600"
              />
              <Button size="sm" variant="secondary" className="whitespace-nowrap">Join</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-600">
          <p>© {new Date().getFullYear()} Pack Me Too. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-emerald-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
