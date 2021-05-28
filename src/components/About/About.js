import React from "react";
import "./about.scss";

const About = (props) => {
  return (
    <div>
      <center>
        <div className="logoContain2">
          <img
            className="logo"
            src="https://res.cloudinary.com/dnfumu7j3/image/upload/v1621962554/plant_ynspft.svg"
            alt="plant logo"
          />
        </div>
      </center>

      <h1 className="aboutTitle">
        Meet the <span className="highlight">plantie</span> team!{" "}
      </h1>
      <br></br>

      <div className="teamContainer">
        <div>
          <img
            className="monica"
            src="https://res.cloudinary.com/dnfumu7j3/image/upload/c_scale,w_250/v1622145470/Plantie%20team/69EDB0E5-B11B-4DA3-A8A0-5E80F534AD70_1_105_c_uzsbzm.jpg"
          />
        </div>
        <h2>Monica</h2>

        <div>
          <img
            className="jerrald"
            src="https://res.cloudinary.com/dnfumu7j3/image/upload/c_scale,w_250/v1622145154/Plantie%20team/slack-imgs.com_h4nfd4.jpg"
          />
          <h2>Jerald</h2>
        </div>
        <div>
          <img
            className="tony"
            src="https://res.cloudinary.com/dnfumu7j3/image/upload/c_scale,w_250/v1622145894/Plantie%20team/T0351JZQ0-U01QLJMLBRT-de891efaef5d-512_kia8vt.jpg"
          />
          <h2>Tony</h2>
        </div>
        <div>
          <img
            className="joe"
            src="https://res.cloudinary.com/dnfumu7j3/image/upload/c_scale,w_250/v1622146135/Plantie%20team/1607026995221_nfeb9q.jpg"
          />
          <h2>Joe</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
