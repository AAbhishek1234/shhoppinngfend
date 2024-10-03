const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 699, stock: 50, rating: 4.5 },
    { id: 2, name: "Laptop", category: "Electronics", price: 1299, stock: 30, rating: 4.7 },
    { id: 3, name: "Headphones", category: "Electronics", price: 199, stock: 100, rating: 4.2 },
    { id: 4, name: "Shoes", category: "Fashion", price: 99, stock: 150, rating: 4.0 },
    { id: 5, name: "Backpack", category: "Fashion", price: 79, stock: 80, rating: 3.8 },
    { id: 6, name: "Washing Machine", category: "Home Appliances", price: 499, stock: 20, rating: 4.1 },
    { id: 7, name: "Refrigerator", category: "Home Appliances", price: 899, stock: 15, rating: 4.6 },
    { id: 8, name: "Microwave", category: "Home Appliances", price: 199, stock: 40, rating: 4.3 },
    { id: 9, name: "T-shirt", category: "Fashion", price: 25, stock: 200, rating: 4.2 },
    { id: 10, name: "Jeans", category: "Fashion", price: 49, stock: 120, rating: 4.1 },
    { id: 11, name: "Coffee Maker", category: "Home Appliances", price: 99, stock: 60, rating: 3.9 },
    { id: 12, name: "Blender", category: "Home Appliances", price: 89, stock: 70, rating: 4.0 },
    { id: 13, name: "Watch", category: "Accessories", price: 199, stock: 75, rating: 4.4 },
    { id: 14, name: "Necklace", category: "Accessories", price: 149, stock: 40, rating: 4.5 },
    { id: 15, name: "Tablet", category: "Electronics", price: 499, stock: 35, rating: 4.6 },
    { id: 16, name: "Smartwatch", category: "Electronics", price: 299, stock: 55, rating: 4.3 },
    { id: 17, name: "Sandals", category: "Fashion", price: 35, stock: 110, rating: 3.7 },
    { id: 18, name: "Dress", category: "Fashion", price: 79, stock: 65, rating: 4.3 },
    { id: 19, name: "Air Conditioner", category: "Home Appliances", price: 1299, stock: 10, rating: 4.7 },
    { id: 20, name: "Camera", category: "Electronics", price: 999, stock: 25, rating: 4.8 },
  ];
  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };
  
  console.log(getProductsByCategory('Fashion'));
  
  
  
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
  