import React, { useState } from "react";



const ArrayExample = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, () => ''));

  const handleChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  return (
    <div>
      <h2>Input 10 Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => console.log(items)}>Submit</button>
    </div>
  );
};




export default ArrayExample;
