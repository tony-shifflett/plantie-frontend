import React, {useEffect} from "react"
import Logo from "./images/icons8-plant-96.png";
import { Link } from "react-router-dom"
import './Splash.scss'
import { FaFacebook, FaGooglePlus } from "react-icons/fa";



import store, {getPlants} from  "../../store"


// const ButtonSection = {
//   display: "flex",
//   flexDirection: "column",
// };

// const ButtonStyle = {
//   backgroundColor: "#E9E9E9",
//   borderRadius: "5px",
//   border: "1px solid gray",
// };

const Splash = () => {
  //fetch existing data from remote database on app load
  // useEffect(()=>{store.dispatch(getPlants)},[])
  return (
    <div>
      <img
        className="logo"
        src="https://res.cloudinary.com/dnfumu7j3/image/upload/v1621962554/plant_ynspft.svg"
        alt="plant logo"
      />
      <h1 className="plantie">Plantie</h1>
      <p>We help make plant care easy.</p>
      <div className="contact">
        <div>
          <Link to="/DailyTask">
            <button>Sign Up</button>
          </Link>
          <br></br>
          <Link to="/DailyTask">
            <button>Log In</button>
          </Link>
          <br></br>
          <span className="line"> or use </span>
          <br></br>
          <Link to="/DailyTask">
            <FaGooglePlus className="icon" size="25" />
          </Link>
          <Link to="/DailyTask">
            <FaFacebook className="icon" size="25" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Splash;
