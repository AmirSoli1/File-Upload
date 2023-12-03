const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const createProduct = async (req, res) => {
  res.status(StatusCodes.CREATED).json({});
};

const getAllProducts = async (req, res) => {
  res.status(200).send('getProduct');
};

module.exports = { getAllProducts, createProduct };
