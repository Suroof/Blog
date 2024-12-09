import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../utils/constants';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            My Blog
          </Link>
          <div className="flex space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;