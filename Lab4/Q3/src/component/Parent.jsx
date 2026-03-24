import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <Child items={items} addItem={addItem} deleteItem={deleteItem} />
    </div>
  );
}

export default Parent;