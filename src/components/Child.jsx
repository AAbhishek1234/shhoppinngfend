

// import React from 'react';

// function Child({ onIncrement, onDecrement }) {
//   console.log("Child received functions:", onIncrement, onDecrement); 

//   return (
//     <div>
//       <button onClick={onIncrement}>Increment</button>
//       <button onClick={onDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default Child;



import React from 'react';

function Child({ onIncrement, onDecrement, onReset,onChange }) {

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset} >Reset</button>
      <button onClick={onChange}> Color</button> 
    </div>
  );
}

export default Child;
