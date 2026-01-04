import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const Header = ({ onConnectClick }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-40"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-lg shadow-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              BrandTracker
            </span>
          </div>

          {/* Navigation (Desktop only) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white/90 hover:text-blue-200 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-blue-200 transition-colors duration-200"
            >
              Brands
            </a>
            <a
              href="#"
              className="text-white/90 hover:text-blue-200 transition-colors duration-200"
            >
              About
            </a>
          </div>

          {/* Connect Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConnectClick}
            aria-label="Connect with us"
            className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            Connect with us
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;