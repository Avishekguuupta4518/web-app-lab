import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2 style={{ fontSize: "48px", margin: "20px 0" }}>{count}</h2>

      <div>
        <button
          onClick={increment}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;