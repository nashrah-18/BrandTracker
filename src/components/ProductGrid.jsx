import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const ProductGrid = ({ products, selectedProducts, onProductSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <ProductCard 
            product={product}
            isSelected={selectedProducts.some(p => p.id === product.id)}
            onSelect={() => onProductSelect(product)}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;