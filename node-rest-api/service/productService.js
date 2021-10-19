const constants = require("../constants");
const Product = require("../database/models/productModel");
const { formatMongoData, checkObjectId } = require("../helpers/dbHelper");

module.exports.createProduct = async (serviceData) => {
  try {
    const product = new Product({ ...serviceData });
    const result = await product.save();

    return formatMongoData(result);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    const products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(products);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);

    const product = await Product.findById(id);

    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }

    return formatMongoData(product);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);

    const product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });

    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }

    return formatMongoData(product);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }

    return formatMongoData(product);
  } catch (error) {
    throw new Error(error);
  }
};
