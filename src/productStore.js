// price_1NhjKxSAdk9sKxttnMmXW7RL - coffee
// price_1NhjMwSAdk9sKxttvjvP4Xpk - sunglasses
// price_1NhjNmSAdk9sKxttIXG40mSX - camera

const productArray = [
  {
    id: "price_1Nhk2iSAdk9sKxtt5ex33fGW",
    title: "Coffee",
    price: 12.99,
  },
  {
    id: "price_1Nhk3HSAdk9sKxtt52kwVVuu",
    title: "Sunglass",
    price: 22.99,
  },
  {
    id: "price_1Nhk43SAdk9sKxttVUhxnzOq",
    title: "Camera",
    price: 82.99,
  },
];

const getProductData = (id) => {
  let productData = productArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product does not exists for ID: " + id);
    return undefined;
  }

  return productData;
};

export { productArray, getProductData };
