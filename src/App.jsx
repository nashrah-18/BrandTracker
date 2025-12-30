import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, MessageCircle, X } from 'lucide-react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import ComparisonPanel from './components/ComparisonPanel';
import ChatbotSidebar from './components/ChatbotSidebar';
import { sampleProducts } from './data/products';
import { Toaster } from './components/ui/toaster';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProducts(sampleProducts);
    } else {
      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
      
      const filtered = sampleProducts.filter(product => {
        const productText = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
        // Check if every search term appears somewhere in the product text
        return searchTerms.every(term => productText.includes(term));
      });
      
      setFilteredProducts(filtered);
    }
  };

  const handleProductSelect = (product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, product]);
      }
    }
  };

  const handleClearComparison = () => {
    setSelectedProducts([]);
  };

  return (
    <>
      <Helmet>
        <title>Brand Tracker - Compare Prices & Shop Directly</title>
        <meta name="description" content="Search for products, compare real prices across Amazon, Flipkart, and Meesho, and shop directly. AI insights on brand safety included." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative z-10">
          <Header />
          
          <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-white mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Brand Tracker
                </h1>
              </div>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Search specific products, compare real prices, and shop directly from Amazon, Flipkart & Meesho.
              </p>
            </motion.div>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
            </motion.div>

            {/* Comparison Panel */}
            <AnimatePresence>
              {selectedProducts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <ComparisonPanel 
                    products={selectedProducts}
                    onClear={handleClearComparison}
                    onRemove={handleProductSelect}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product Grid */}
            <ProductGrid 
              products={filteredProducts}
              selectedProducts={selectedProducts}
              onProductSelect={handleProductSelect}
            />
          </main>
        </div>

        {/* Chatbot Toggle Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl z-50 hover:shadow-purple-500/50 transition-all duration-300"
        >
          {isChatbotOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>

        {/* Chatbot Sidebar */}
        <ChatbotSidebar isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

        <Toaster />
      </div>
    </>
  );
}

export default App;