  
  
  
  
  
  
  
  const ExpensiveProduct = () => {
    return products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
  };
  
  console.log(ExpensiveProduct());
  
  
  
  
  
  const findProductByName = (name) => {
    return products.find(product => product.name === name);
  };
  
  console.log(findProductByName('Smartphone'));
  
  
  
  
  const ProductsWithRating = (ratingValue) => {
    return products.filter(product => product.rating > ratingValue);
  };
  
  console.log(ProductsWithRating(4.5));
  
  
  
  
  
  const StockGreaterThan = (stockLimit) => {
    return products.filter(product => product.stock > stockLimit);
  };
  
  console.log(StockGreaterThan(50));
  
  
  
  
  
  
  const getProductsBelowPrice = (priceLimit) => {
   return products.filter(product => product.price < priceLimit);
  }
  console.log(getProductsBelowPrice(100));
  