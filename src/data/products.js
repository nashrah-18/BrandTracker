export const sampleProducts = [
  {
    id: 1,
    name: "Garnier Bright Complete Vitamin C Serum",
    brand: "Garnier",
    category: "Skincare",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 549, url: "https://www.amazon.in/s?k=Garnier+Vitamin+C+Serum" },
      { platform: "Flipkart", price: 520, url: "https://www.flipkart.com/search?q=Garnier+Vitamin+C+Serum" },
      { platform: "Meesho", price: 535, url: "https://www.meesho.com/search?q=Garnier+Vitamin+C+Serum" }
    ]
  },
  {
    id: 2,
    name: "Minimalist 10% Niacinamide Face Serum",
    brand: "Minimalist",
    category: "Skincare",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 599, url: "https://www.amazon.in/s?k=Minimalist+Niacinamide" },
      { platform: "Flipkart", price: 595, url: "https://www.flipkart.com/search?q=Minimalist+Niacinamide" },
      { platform: "Meesho", price: 580, url: "https://www.meesho.com/search?q=Minimalist+Niacinamide" }
    ]
  },
  {
    id: 3,
    name: "Rom&nd Juicy Lasting Tint - Figfig",
    brand: "Rom&nd",
    category: "Makeup",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 890, url: "https://www.amazon.in/s?k=Rom%26nd+Juicy+Lasting+Tint" },
      { platform: "Flipkart", price: 1150, url: "https://www.flipkart.com/search?q=Rom%26nd+Tint" },
      { platform: "Meesho", price: 850, url: "https://www.meesho.com/search?q=Rom%26nd+Tint" }
    ]
  },
  {
    id: 4,
    name: "Kay Beauty Matte Drama Lipstick",
    brand: "Kay Beauty",
    category: "Makeup",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 999, url: "https://www.amazon.in/s?k=Kay+Beauty+Lipstick" },
      { platform: "Flipkart", price: 950, url: "https://www.flipkart.com/search?q=Kay+Beauty+Lipstick" },
      { platform: "Meesho", price: 925, url: "https://www.meesho.com/search?q=Kay+Beauty+Lipstick" }
    ]
  },
  {
    id: 5,
    name: "MAC Retro Matte Lipstick - Ruby Woo",
    brand: "MAC",
    category: "Makeup",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1627289875908-16cb6006e8b4?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 1950, url: "https://www.amazon.in/s?k=MAC+Ruby+Woo" },
      { platform: "Flipkart", price: 2100, url: "https://www.flipkart.com/search?q=MAC+Ruby+Woo" },
      { platform: "Meesho", price: 1850, url: "https://www.meesho.com/search?q=MAC+Lipstick" } // Note: unlikely to be authentic on all platforms, but simulating search
    ]
  },
  {
    id: 6,
    name: "Chanel Coco Mademoiselle Eau De Parfum",
    brand: "Chanel",
    category: "Fragrance",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 12500, url: "https://www.amazon.in/s?k=Chanel+Perfume" },
      { platform: "Flipkart", price: 13200, url: "https://www.flipkart.com/search?q=Chanel+Perfume" },
      { platform: "Meesho", price: 11500, url: "https://www.meesho.com/search?q=Chanel+Perfume" }
    ]
  },
  {
    id: 7,
    name: "Mamaearth Onion Hair Oil - 250ml",
    brand: "Mamaearth",
    category: "Hair Care",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 449, url: "https://www.amazon.in/s?k=Mamaearth+Onion+Oil" },
      { platform: "Flipkart", price: 459, url: "https://www.flipkart.com/search?q=Mamaearth+Onion+Oil" },
      { platform: "Meesho", price: 429, url: "https://www.meesho.com/search?q=Mamaearth+Onion+Oil" }
    ]
  },
  {
    id: 8,
    name: "Boult Audio AirBass Z20 TWS",
    brand: "Boult",
    category: "Electronics",
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 1299, url: "https://www.amazon.in/s?k=Boult+AirBass" },
      { platform: "Flipkart", price: 1349, url: "https://www.flipkart.com/search?q=Boult+AirBass" },
      { platform: "Meesho", price: 1249, url: "https://www.meesho.com/search?q=Boult+Earbuds" }
    ]
  },
  {
    id: 9,
    name: "Noise ColorFit Pro 3 Smart Watch",
    brand: "Noise",
    category: "Electronics",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 2999, url: "https://www.amazon.in/s?k=Noise+ColorFit" },
      { platform: "Flipkart", price: 3099, url: "https://www.flipkart.com/search?q=Noise+ColorFit" },
      { platform: "Meesho", price: 2899, url: "https://www.meesho.com/search?q=Noise+Smartwatch" }
    ]
  },
  {
    id: 10,
    name: "Patanjali Aloe Vera Gel",
    brand: "Patanjali",
    category: "Skincare",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1556228852-80a54246d241?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 165, url: "https://www.amazon.in/s?k=Patanjali+Aloe+Vera" },
      { platform: "Flipkart", price: 175, url: "https://www.flipkart.com/search?q=Patanjali+Aloe+Vera" },
      { platform: "Meesho", price: 155, url: "https://www.meesho.com/search?q=Patanjali+Aloe+Vera" }
    ]
  },
  {
    id: 11,
    name: "Lakme Absolute Matte Lipstick",
    brand: "Lakme",
    category: "Makeup",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 525, url: "https://www.amazon.in/s?k=Lakme+Matte+Lipstick" },
      { platform: "Flipkart", price: 499, url: "https://www.flipkart.com/search?q=Lakme+Matte+Lipstick" },
      { platform: "Meesho", price: 485, url: "https://www.meesho.com/search?q=Lakme+Lipstick" }
    ]
  },
  {
    id: 12,
    name: "Nykaa Matte To Last! Liquid Lipstick",
    brand: "Nykaa",
    category: "Makeup",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db7f2cd7?w=400&h=300&fit=crop",
    platforms: [
      { platform: "Amazon", price: 449, url: "https://www.amazon.in/s?k=Nykaa+Liquid+Lipstick" },
      { platform: "Flipkart", price: 440, url: "https://www.flipkart.com/search?q=Nykaa+Liquid+Lipstick" },
      { platform: "Meesho", price: 425, url: "https://www.meesho.com/search?q=Nykaa+Lipstick" }
    ]
  }
];