// import React, { useState } from 'react';
// import Child from '../components/Child';

// function Parent() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   console.log("Parent component count:", count);
//   return (
//     <div>
//       <Child onIncrement={increment} onDecrement={decrement} />
//       <h2>Count {count}</h2>
//     </div>
//   );
// }

// export default Parent;

// import React, { useState } from 'react';
// import Child from '../components/Child';

// function Parent() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   console.log("Parent component count:", count);

//   return (
//     <div>
//       <Child
//         onIncrement={increment}
//         onDecrement={decrement}
//         onReset={reset}
//       />
//       <h2>Count: {count}</h2>
//     </div>
//   );
// }

// export default Parent;








//pro drilling disadvanatages and  how to avoid...........
import React, { useState } from "react";
import Child from "../components/Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "black" ? "red" : "black"));
  };

  console.log("Pc", count);

  return (
    <div>
      <Child onIncrement={increment} onDecrement={decrement} onReset={reset} onChange={changeColor} />
      <h2 style={{ color: color }}> {count}</h2>

    </div>
  );
}

export default Parent;




//child ke andar child and grand child se parent 



