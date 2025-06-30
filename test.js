// const products = [
//     { id: 1, name: "Smartphone", category: "Electronics", price: 699, stock: 50, rating: 4.5 },
//     { id: 2, name: "Laptop", category: "Electronics", price: 1299, stock: 30, rating: 4.7 },
//     { id: 3, name: "Headphones", category: "Electronics", price: 199, stock: 100, rating: 4.2 },
//     { id: 4, name: "Shoes", category: "Fashion", price: 99, stock: 150, rating: 4.0 },
//     { id: 5, name: "Backpack", category: "Fashion", price: 79, stock: 80, rating: 3.8 },
//     { id: 6, name: "Washing Machine", category: "Home Appliances", price: 499, stock: 20, rating: 4.1 },
//     { id: 7, name: "Refrigerator", category: "Home Appliances", price: 899, stock: 15, rating: 4.6 },
//     { id: 8, name: "Microwave", category: "Home Appliances", price: 199, stock: 40, rating: 4.3 },
//     { id: 9, name: "T-shirt", category: "Fashion", price: 25, stock: 200, rating: 4.2 },
//     { id: 10, name: "Jeans", category: "Fashion", price: 49, stock: 120, rating: 4.1 },
//     { id: 11, name: "Coffee Maker", category: "Home Appliances", price: 99, stock: 60, rating: 3.9 },
//     { id: 12, name: "Blender", category: "Home Appliances", price: 89, stock: 70, rating: 4.0 },
//     { id: 13, name: "Watch", category: "Accessories", price: 199, stock: 75, rating: 4.4 },
//     { id: 14, name: "Necklace", category: "Accessories", price: 149, stock: 40, rating: 4.5 },
//     { id: 15, name: "Tablet", category: "Electronics", price: 499, stock: 35, rating: 4.6 },
//     { id: 16, name: "Smartwatch", category: "Electronics", price: 299, stock: 55, rating: 4.3 },
//     { id: 17, name: "Sandals", category: "Fashion", price: 35, stock: 110, rating: 3.7 },
//     { id: 18, name: "Dress", category: "Fashion", price: 79, stock: 65, rating: 4.3 },
//     { id: 19, name: "Air Conditioner", category: "Home Appliances", price: 1299, stock: 10, rating: 4.7 },
//     { id: 20, name: "Camera", category: "Electronics", price: 999, stock: 25, rating: 4.8 },
//   ];
  // const getProductsByCategory = (category) => {
  //   return products.filter(product => product.category === category);
  // };
  
  // console.log(getProductsByCategory('Fashion'));
  
  
  
  // const ExpensiveProduct = () => {
  //   return products.reduce((max, product) => product.price > max.price ? product : max, products[0]);
  // };
  
  // console.log(ExpensiveProduct());
  
  
  
  
  
  // const findProductByName = (name) => {
  //   return products.find(product => product.name === name);
  // };
  
  // console.log(findProductByName('Smartphone'));
  
  
  
  
  // const ProductsWithRating = (ratingValue) => {
  //   return products.filter(product => product.rating > ratingValue);
  // };
  
  // console.log(ProductsWithRating(4.5));
  
  
  
  
  
  // const StockGreaterThan = (stockLimit) => {
  //   return products.filter(product => product.stock > stockLimit);
  // };
  
  // console.log(StockGreaterThan(50));
  
  
  
  
  
  
  // const getProductsBelowPrice = (priceLimit) => {
  //  return products.filter(product => product.price < priceLimit);
  // }
  // console.log(getProductsBelowPrice(100));
  // function getMostExpensiveProduct() {
  //   let mostExpensiveProduct = products[0]; 
  //   for (let i = 1; i < products.length; i++) { 
  //     if (products[i].price > mostExpensiveProduct.price) { 
  //       mostExpensiveProduct = products[i]; 
  //     }
  //   }
  //   return mostExpensiveProduct; 
  // }

  //////--------ANOTHER METHOD---//
  // function getProductsByCategory(category) {
  //   let result = [];
  //   for (let product of products) {
  //     if (product.category === category) {
  //       result.push(product);
  //     }
  //   }
  //   return result;
  
  /////----2----////
  // console.log(getProductsByCategory("Electronics"));
  
  // function getMostExpensiveProduct() {
  //   let expensiveProduct = products[0];  
  //   for (let product of products) {
  //     if (product.price > expensiveProduct.price) {
  //       expensiveProduct = product;  
  //     }
  //   }
  
  //   return expensiveProduct;
  // }
  
  // console.log(getMostExpensiveProduct());
  

  ///----////
  // function getMostExpensiveProduct() {
  //   let mostExpensive = products[0]; 
  //   for (let i = 1; i < products.length; i++) {
  //     if (products[i].price > mostExpensive.price) {
  //       mostExpensive = products[i];
  //     }
  //   }
  //   return mostExpensive;
  // }
  
  // console.log(getMostExpensiveProduct());
  





//   let objArr = [
//     {
//         name: 'john',
//         age: 12,
//         gender: 'male'
//     },
//     {
//         name: 'john',
//         age: 15,
//         gender: 'female'
//     },
//     {
//         name: 'julie',
//         age: 20,
//         gender: 'trans'
//     }
// ];








// function addSerialNumber(objArr) {
//   return objArr.map((obj, index) => ({ ...obj, serialNumber: index }));
// }

// let objArr1 = [
//   {
//       name: 'john',
//       age: 12,
//       gender: 'male'
//   },
//   {
//       name: 'john',
//       age: 15,
//       gender: 'female'
//   },
//   {
//       name: 'julie',
//       age: 20,
//       gender: 'trans'
//   }
// ];

// const result = addSerialNumber(objArr);
// console.log(result);


// function addSerialNumber(objArr) {
//   for (let i = 0; i < objArr.length; i++) {
//       objArr[i].serialNumber = i;
//   }
// }

// // Example usage:
// let objArr1 = [
//   {
//       name: 'john',
//       age: 12,
//       gender: 'male'
//   },
//   {
//       name: 'john',
//       age: 15,
//       gender: 'female'
//   },
//   {
//       name: 'julie',
//       age: 20,
//       gender: 'trans'
//   }
// ];

// addSerialNumber(objArr);
// console.log(objArr);



// function removeDuplicates(arr) {
//   const track = {};
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!track[arr[i].name]) {
//       track[arr[i].name] = true;
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }
// const data = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 22 },
//   { name: "John", age: 30 },
//   { name: "Alice", age: 28 },
// ];

// const result = removeDuplicates(data);
// console.log(result);





let myPromise = new Promise(function(resolve, reject) {
  // some code that takes time, like loading data
  let success = false; // change this to false to check error

  if (success) {
    resolve("The data has loaded successfully!");
  } else {
    reject("There was an error loading the data.");
  }
});