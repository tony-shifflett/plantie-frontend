import React from "react"
import Logo from "./images/icons8-plant-96.png";

const ButtonSection = {
  display: "flex",
  flexDirection: "column",
};

const ButtonStyle = {
  backgroundColor: "#E9E9E9",
  borderRadius: "5px",
  border: "1px solid gray",
};

const Splash = () => {
  return (
    <div>
      <img src={Logo} alt="plant logo" />
      <h1>Plantie</h1>
      <div>
        <button style={ButtonStyle}>Sign Up</button>
        <button style={ButtonStyle}>Log In</button>
      </div>
    </div>
  );
};

export default Splash;
