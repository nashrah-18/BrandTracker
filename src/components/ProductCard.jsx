import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, Star } from 'lucide-react';
import PlatformBadge from '@/components/PlatformBadge';

const ProductCard = ({ product, isSelected, onSelect }) => {
  const lowestPrice = Math.min(...product.platforms.map(p => p.price));
  const lowestPlatform = product.platforms.find(p => p.price === lowestPrice);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      className={`bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full relative ${
        isSelected ? 'ring-4 ring-purple-500' : ''
      }`}
    >
      <div 
        className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center cursor-pointer group"
        onClick={onSelect}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${
              isSelected 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-purple-100'
            } shadow-lg transition-colors duration-200`}
          >
            {isSelected ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </motion.button>
        </div>
        {product.rating && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center gap-1 text-xs font-bold text-gray-800">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            {product.rating}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3 cursor-pointer" onClick={onSelect}>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wide bg-purple-50 px-2 py-0.5 rounded-full">
            {product.brand}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mt-2 line-clamp-2 leading-tight min-h-[3rem]">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>

        <div className="mb-4 pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{lowestPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">
              Best Deal
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            on <span className="font-medium">{lowestPlatform.platform}</span>
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {product.platforms.map((platform) => (
            <PlatformBadge 
              key={platform.platform}
              platform={platform.platform}
              price={platform.price}
              url={platform.url}
              isLowest={platform.price === lowestPrice}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
