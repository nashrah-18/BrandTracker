import React from 'react';
import { motion } from 'framer-motion';
import { X, TrendingDown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComparisonPanel = ({ products, onClear, onRemove }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Price Comparison</h2>
        </div>
        <Button
          onClick={onClear}
          variant="outline"
          className="hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors duration-200"
        >
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {products.map((product) => {
          const lowestPrice = Math.min(...product.platforms.map(p => p.price));
          const highestPrice = Math.max(...product.platforms.map(p => p.price));
          const savings = highestPrice - lowestPrice;
          const savingsPercent = ((savings / highestPrice) * 100).toFixed(0);

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-purple-200 relative"
            >
              <button
                onClick={() => onRemove(product)}
                className="absolute top-2 right-2 p-1 bg-white rounded-full hover:bg-red-50 transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-600 hover:text-red-600" />
              </button>

              <div className="mb-3">
                <p className="text-xs font-semibold text-purple-600 uppercase">
                  {product.brand}
                </p>
                <h3 className="font-bold text-gray-800 line-clamp-2 text-sm">
                  {product.name}
                </h3>
              </div>

              <div className="space-y-2">
                {product.platforms.map((platform) => {
                  const isLowest = platform.price === lowestPrice;
                  return (
                    <div
                      key={platform.platform}
                      className={`flex items-center justify-between p-2 rounded-lg ${
                        isLowest
                          ? 'bg-green-100 border border-green-300'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <span className="text-xs font-semibold text-gray-700">
                        {platform.platform}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          isLowest ? 'text-green-700' : 'text-gray-800'
                        }`}
                      >
                        ₹{platform.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>

              {savings > 0 && (
                <div className="mt-3 p-2 bg-green-100 rounded-lg border border-green-300">
                  <p className="text-xs font-semibold text-green-700">
                    Save up to ₹{savings.toLocaleString('en-IN')} ({savingsPercent}%)
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {products.length < 3 && (
        <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800">
            Select up to 3 products to compare prices across platforms. Click on product cards to add them.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonPanel;