const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "products testing routes static" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products testing routes" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
