// import { useState, useEffect } from 'react';

// function Fake() {
//   const [data, setData] = useState([]); 

//   useEffect(() => {
//     console.log("Fetching data...");
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Data fetched successfully:", data);
//         setData(data);
//       })
//       .catch(error => console.error('Fetch error:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Data</h1>
//       {data.length > 0 ? (
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>
//               <p>UserId:{item.userId}</p>
//               <p>Id: {item.id}</p>
//               <p>Title: {item.title}</p>
//               <p>Body:{item.body}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Fake;



import { useState, useEffect } from 'react';

function Fake() {
  const [data, setData] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    console.log("data");
    fetch('https://jsonplaceholder.typicode.com/posts ')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Data fetched successfully:", data);
        setData(data); 
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const handleSearch = () => {
    const filtered = data.filter(item => item.userId.toString().includes(searchTerm));
    setData(filtered.length > 0 ? filtered : data); 
  };

  return (
    <div>
      <h1>Data </h1>

      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Click me</button>

      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <p>UserId: {item.userId}</p>
              <p>Id: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>Body: {item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry visit next time  {searchTerm}</p>
      )}
    </div>
  );
}

export default Fake;
