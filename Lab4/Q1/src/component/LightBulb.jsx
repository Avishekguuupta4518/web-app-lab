import React, { useState } from "react";
import bulbOn from "../assets/bulb-on.png";
import bulbOff from "../assets/bulb-off.png";

function LightBulb() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <img
        src={isOn ? bulbOn : bulbOff}
        alt="bulb"
        width="150"
      />

      <h2>{isOn ? "Bulb is ON" : "Bulb is OFF"}</h2>

      <button onClick={toggleBulb}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

    </div>
  );
}

export default LightBulb;