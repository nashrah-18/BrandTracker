import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { brandInfo } from '@/data/brandInfo';

const ChatbotSidebar = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your Brand Safety Assistant. Ask me about animal testing, harmful chemicals, or health aspects of any Indian brand.",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    setMessages([...messages, userMessage]);

    // Simple AI response based on keywords
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: botResponse,
          isBot: true,
        },
      ]);
    }, 500);

    setInputValue('');
  };

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // Find brand in query
    const brand = Object.keys(brandInfo).find((b) =>
      lowerQuery.includes(b.toLowerCase())
    );

    if (brand && brandInfo[brand]) {
      const info = brandInfo[brand];

      if (lowerQuery.includes('animal') || lowerQuery.includes('testing')) {
        return `${brand}: ${info.animalTesting}`;
      }

      if (lowerQuery.includes('chemical') || lowerQuery.includes('harmful')) {
        return `${brand}: ${info.harmfulChemicals}`;
      }

      if (lowerQuery.includes('health') || lowerQuery.includes('safe')) {
        return `${brand}: ${info.healthAspects}`;
      }

      // General info
      return `Here's what I know about ${brand}:\n\n🐰 Animal Testing: ${info.animalTesting}\n\n🧪 Harmful Chemicals: ${info.harmfulChemicals}\n\n💚 Health Aspects: ${info.healthAspects}`;
    }

    // General responses
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello! I can help you with information about Indian brands. Try asking about brands like Patanjali, Mamaearth, Himalaya, Lakme, Nykaa, Boult, or Noise!";
    }

    if (lowerQuery.includes('help')) {
      return "I can provide information about:\n• Animal testing policies\n• Harmful chemicals in products\n• Health and safety aspects\n\nJust mention a brand name (like Mamaearth or Patanjali) and what you'd like to know!";
    }

    return "I can help you learn about brand safety! Try asking about specific brands like Patanjali, Mamaearth, Himalaya, Lakme, Nykaa, Boult, or Noise. You can ask about animal testing, chemicals, or health aspects.";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/20 bg-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Brand Safety AI</h2>
                  <p className="text-sm text-blue-100">Ask about any brand</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.isBot ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        message.isBot
                          ? 'bg-white/20'
                          : 'bg-gradient-to-br from-purple-400 to-pink-400'
                      }`}
                    >
                      {message.isBot ? (
                        <Sparkles className="w-4 h-4 text-white" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-white/20 backdrop-blur-sm text-white'
                          : 'bg-white text-gray-800'
                      } whitespace-pre-line`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20 bg-white/10 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about a brand..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <Button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 rounded-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatbotSidebar;