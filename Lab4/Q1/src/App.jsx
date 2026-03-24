// Design and develop a simple React component that displays a light bulb image along with a control button. When the user clicks the button, the bulb should toggle between ON and OFF states by changing the image dynamically. At the same time, a status message should update to indicate whether the bulb is currently ON or OFF. The button text should also change accordingly (for example, “Turn ON” or “Turn OFF”). Implement the functionality using React state and event handlers.

import React from "react";
import LightBulb from "./component/LightBulb.jsx";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

export default App;