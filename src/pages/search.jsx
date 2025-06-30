import React, { useState, useEffect } from 'react';

const App = () => {
  const [data] = useState([
    { id: 1, title: 'Frontend Developer' },
    { id: 2, title: 'Backend Developer' },
    { id: 3, title: 'Full Stack Developer' },
    { id: 4, title: 'Data Scientist' },
    { id: 5, title: 'UI/UX Designer' },
  ]);

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredData(
        data.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 300); // 300ms debounce time

    return () => clearTimeout(handler);
  }, [query, data]);

  return (
    <div>
      <h1>Job Search</h1>
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
