const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async error");
  res.status(200).json({ msg: "products testing routes static" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products testing routes" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
