export const getAllProducts = async (req, res, next) => {
  const rawProducts = await fetch('https://fakestoreapi.com/products');
  const productsJson = await rawProducts.json();
  res.status(200).json({
    status: 'success',
    products: productsJson,
  });
};

export const getSingleProduct = async (req, res) => {
  try {
    const productId = req.query.id;
    const rawProduct = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const productJson = await rawProduct.json();
    res.status(200).json({
      status: 'success',
      product: productJson,
    });
  } catch (err) {
    res.status(200).json({
      status: 'fail',
      message: 'something went very wrong...',
    });
  }
};
