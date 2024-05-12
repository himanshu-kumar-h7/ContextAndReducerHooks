import React, { useState } from "react";

function ArrayExample() {
  const [items, setItems] = useState(Array.from({ length: 10 }, () => ""));

  const handleUpdate = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  return (
    <>
      <h1>input 10 items below</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <input
                type="text"
                value={item}
                onChange={(e) => handleUpdate(index, e.target.value)}
              />
            </li>
          );
        })}
      </ul>
      <button onClick={() => console.log(items)}>Submit</button>
    </>
  );
}

export default ArrayExample;
