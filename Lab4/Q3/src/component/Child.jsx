import React from "react";

function Child({ items, addItem, deleteItem }) {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Item List</h2>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {item}{" "}
            <button
              onClick={() => deleteItem(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={addItem}>Add New Item</button>
    </div>
  );
}

export default Child;
