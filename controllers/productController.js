const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  const pageSize = 6;
  const page = Number(req.query.pageNumber) || 0;
  const count = await prisma.product.count();
  const products = await prisma.product.findMany({
    skip: pageSize * (page - 1),
    take: pageSize,
  });
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
};

module.exports = getProducts;
