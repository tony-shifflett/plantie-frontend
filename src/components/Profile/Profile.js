import React from "react";
import "./profile.scss";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

class Profile extends React.Component {
  render() {
    return (
      <div className="proContain">
        <div className="proMain">
          <div className="containProfile">
            <br></br>
            <div className="containProPic">
              <img
                className="proPic"
                src="https://res.cloudinary.com/dnfumu7j3/image/upload/c_scale,w_250/v1622168743/shelby-miller-_adp24aH9zI-unsplash_zqfdjx.jpg"
              />
            </div>
            <br></br>
            <div className="containInfo">
              <h2>Janie Appleseed</h2>
              <p>Hi! I'm Jane and I love plants. 🌸 </p>
              <AiFillInstagram className="iconPro" size="25" />
              <AiFillTwitterCircle className="iconPro" size="25" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
