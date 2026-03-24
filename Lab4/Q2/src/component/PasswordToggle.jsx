import React, { useState } from "react";
import showIcon from "../assets/show.png";
import hideIcon from "../assets/hidden.png"; 

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Toggle</h2>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <input
          type={showPassword ? "text" : "password"} // hidden by default
          placeholder="Enter password"
          style={{ padding: "10px", fontSize: "16px", border: "none", outline: "none" }}
        />
        <img
          src={showPassword ? hideIcon : showIcon} // shows open eye when hidden
          alt="toggle"
          width="25"
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={togglePassword}
        />
      </div>

      <div style={{ marginTop: "10px", fontSize: "16px" }}>
        {showPassword ? "Password is Visible" : "Password is Hidden"}
      </div>
    </div>
  );
}

export default PasswordToggle;