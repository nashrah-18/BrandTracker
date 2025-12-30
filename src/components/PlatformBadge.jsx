import React from 'react';
import { ExternalLink } from 'lucide-react';

const PlatformBadge = ({ platform, price, isLowest, url }) => {
  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Amazon':
        return 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100';
      case 'Flipkart':
        return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
      case 'Meesho':
        return 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 ${getPlatformColor(
        platform
      )} ${isLowest ? 'ring-2 ring-green-400' : ''}`}
      onClick={(e) => e.stopPropagation()} // Prevent triggering card selection when clicking link
    >
      <span>{platform}: ₹{price.toLocaleString('en-IN')}</span>
      <ExternalLink className="w-3 h-3 opacity-70" />
    </a>
  );
};

export default PlatformBadge;