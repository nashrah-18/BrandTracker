const { fetchProductPrices } = require("../services/serpApiService");

exports.searchProducts = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Query is required" });
    }

    const results = await fetchProductPrices(q);

    const formatted = results.map(item => ({
      title: item.title,
      image: item.thumbnail,
      amazon: {
        price: item.price,
        link: item.link,
      },
      flipkart: {
        price: item.price + 50, // mock for now
        link:
          "https://www.flipkart.com/search?q=" +
          encodeURIComponent(item.title),
      },
    }));

    res.status(200).json({
      success: true,
      data: formatted,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Failed to fetch products",
    });
  }
};
