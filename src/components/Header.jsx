import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">BrandTracker</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              Brands
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              About
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;