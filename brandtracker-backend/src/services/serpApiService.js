const axios = require("axios");

const SERPAPI_KEY = process.env.SERPAPI_KEY;

/**
 * Fetch product prices using SerpAPI (Google Shopping)
 * @param {string} query - product search query
 */
exports.fetchProductPrices = async (query) => {
  try {
    if (!query) {
      throw new Error("Search query is required");
    }

    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_shopping",
        q: query,
        gl: "in",          // India
        hl: "en",
        api_key: SERPAPI_KEY,
      },
    });

    const results = response.data.shopping_results || [];

    // Filter & normalize platforms
    const allowedPlatforms = ["amazon", "flipkart", "nykaa"];

    const products = results
      .filter((item) =>
        allowedPlatforms.some((platform) =>
          item.source?.toLowerCase().includes(platform)
        )
      )
      .map((item) => ({
        title: item.title,
        price: item.extracted_price || null,
        currency: item.currency || "INR",
        platform: item.source,
        image: item.thumbnail,
        link: item.link,
      }));

    return products;
  } catch (error) {
    console.error("SerpAPI Error:", error.message);
    throw new Error("Failed to fetch product pricing");
  }
};
