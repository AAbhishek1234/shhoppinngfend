import React, { useEffect, useState } from 'react';
import './filter.css';
import { Link } from 'react-router-dom';
const ProductFilterAndList = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/prdct/filter');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTags((prev) => [...prev, value]);
    } else {
      setSelectedTags((prev) => prev.filter((tag) => tag !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasSelectedFilters = selectedCategories.length > 0 || price || rating || selectedTags.length > 0;

    if (!hasSelectedFilters) {
      window.alert('Please select at least one filter before applying.');
      return;
    }

    const filters = {
      category: selectedCategories,
      price,
      rating,
      tag: selectedTags,
    };

    try {
      const response = await fetch('http://localhost:4000/prdct/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch filtered products');
      }

      const data = await response.json();
      setFilteredProducts(data.data);

      if (data.data.length === 0) {
        window.alert('No products match your filter criteria.');
      }
    } catch (error) {
      console.error('Error filtering products:', error);
    }
  };

  return (
    <div>
      <h1>Filter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category: </label>
          <div>
            <input
              type="checkbox"
              id="male"
              value="male"
              checked={selectedCategories.includes('male')}
              onChange={handleCategoryChange}
            />
            <label htmlFor="male">Male</label><br/>

            <input
              type="checkbox"
              id="female"
              value="female"
              checked={selectedCategories.includes('female')}
              onChange={handleCategoryChange}
            />
            <label htmlFor="female">Female</label><br/>

            <input
              type="checkbox"
              id="both"
              value="both"
              checked={selectedCategories.includes('both')}
              onChange={handleCategoryChange}
            />
            <label htmlFor="both">Both</label>
          </div>
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Rating: </label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label>Tags: </label>
          <div>
            {['NewArrival', 'TopSelling', 'Gym', 'Casual', 'Party', 'Formal'].map((tag) => (
              <div key={tag}>
                <input
                  type="checkbox"
                  id={tag}
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" style={{ backgroundColor: "16FF00" }}>Apply</button>
      </form>

      <div className="product-list">
        <h2>Product List</h2>
        {filteredProducts.length === 0 ? (
          <p>No match found</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product._id} className="product-item">
                <h3>{product.title}</h3>
                {product.image.fileContent && (
                  <Link to={`/Productdetails/${product._id}`}>
                    <img
                      src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
                      alt={product.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                )}
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating}</p>
                <p>Tag: {product.tag}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilterAndList;



















// import React, { useEffect, useState } from 'react';
// import './filter.css';
// import { Link } from 'react-router-dom';

// const ProductFilterAndList = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [price, setPrice] = useState(''); // Price state
//   const [rating, setRating] = useState('');
//   const [selectedTags, setSelectedTags] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Fetching products initially
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/prdct/filter');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data.data);
//         setFilteredProducts(data.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedCategories([...selectedCategories, value]);
//     } else {
//       setSelectedCategories(selectedCategories.filter((category) => category !== value));
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedTags((prev) => [...prev, value]);
//     } else {
//       setSelectedTags((prev) => prev.filter((tag) => tag !== value));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const hasSelectedFilters = selectedCategories.length > 0 || price || rating || selectedTags.length > 0;

//     if (!hasSelectedFilters) {
//       window.alert('Please select at least one filter before applying.');
//       return;
//     }

//     const filters = {
//       category: selectedCategories,
//       price: price ? Number(price) : undefined,  // Ensure price is sent as a number
//       rating,
//       tag: selectedTags,
//     };

//     try {
//       const response = await fetch('http://localhost:4000/prdct/filter', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(filters),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch filtered products');
//       }

//       const data = await response.json();
//       setFilteredProducts(data.data);

//       if (data.data.length === 0) {
//         window.alert('No products match your filter criteria.');
//       }
//     } catch (error) {
//       console.error('Error filtering products:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Filter</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Category: </label>
//           <div>
//             <input
//               type="checkbox"
//               id="male"
//               value="male"
//               checked={selectedCategories.includes('male')}
//               onChange={handleCategoryChange}
//             />
//             <label htmlFor="male">Male</label><br/>

//             <input
//               type="checkbox"
//               id="female"
//               value="female"
//               checked={selectedCategories.includes('female')}
//               onChange={handleCategoryChange}
//             />
//             <label htmlFor="female">Female</label><br/>

//             <input
//               type="checkbox"
//               id="both"
//               value="both"
//               checked={selectedCategories.includes('both')}
//               onChange={handleCategoryChange}
//             />
//             <label htmlFor="both">Both</label>
//           </div>
//         </div>
//         <div>
//           <label>Price: </label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}  // Ensure price is a number
//           />
//         </div>
//         <div>
//           <label>Rating: </label>
//           <input
//             type="text"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Tags: </label>
//           <div>
//             {['NewArrival', 'TopSelling', 'Gym', 'Casual', 'Party', 'Formal'].map((tag) => (
//               <div key={tag}>
//                 <input
//                   type="checkbox"
//                   id={tag}
//                   value={tag}
//                   checked={selectedTags.includes(tag)}
//                   onChange={handleCheckboxChange}
//                 />
//                 <label htmlFor={tag}>{tag}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button type="submit" style={{ backgroundColor: "16FF00" }}>Apply</button>
//       </form>

//       <div className="product-list">
//         <h2>Product List</h2>
//         {filteredProducts.length === 0 ? (
//           <p>No match found</p>
//         ) : (
//           <div className="product-grid">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="product-item">
//                 <h3>{product.title}</h3>
//                 {product.image.fileContent && (
//                   <Link to={`/Productdetails/${product._id}`}>
//                     <img
//                       src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
//                       alt={product.title}
//                       style={{ width: '100%', height: 'auto' }}
//                     />
//                   </Link>
//                 )}
//                 <p>Price: {product.price}</p>
//                 <p>Category: {product.category}</p>
//                 <p>Rating: {product.rating}</p>
//                 <p>Tag: {product.tag}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductFilterAndList;
