import React, {useEffect} from "react"
import Logo from "./images/icons8-plant-96.png";
import {Link} from "react-router-dom"

import store, {getPlants} from  "../../store"


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
  //fetch existing data from remote database on app load
  useEffect(()=>{store.dispatch(getPlants)},[])
  return (
    <div>
      <img src={Logo} alt="plant logo" />
      <h1>Plantie</h1>
      <div>
        <Link to="/signup">
          <button style={ButtonStyle}>Sign Up</button>
        </Link>
        <Link to="/login">
          <button style={ButtonStyle}>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
