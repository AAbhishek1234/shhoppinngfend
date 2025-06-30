import React from 'react';

function Textbox({ text, onTextChange }) {
  console.log("onTextChange prop:", onTextChange); 

  const handleChange = (event) => {
    if (typeof onTextChange === 'function') {
      onTextChange(event.target.value);
    } else {
      console.error("onTextChange is not a function");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
      />
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
      />
    </div>
  );
}

export default Textbox;
