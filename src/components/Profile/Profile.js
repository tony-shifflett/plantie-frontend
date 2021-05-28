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
                src="https://lh3.googleusercontent.com/uVEiNeYTE3_A20Qj_CVNyA35M7wf_DQkhOn-bVX7zaMuKxwe98IogGO_rsCrzzVyIOj-AhpDObmkDM9ZAJ5UFYjokjYQa7tw40YCkABDDcJJ9fxQNJUVbw-pawUym2Jkh9Raf7i6zSrS-lC0rUyK9i5eWG5r3SEhM7hLxESgInWUHDjApKjxjPLf8uV5Es53bB7iJ40MfCh_xq95MQLbtkb9NgJnRCEqFCjWpWH2sng_gbS_UJj06kV3dr974BYosnc_w0K1_MB23U1e5Zz-zBSbNAps-SWW198xRxwMIZYNIbwNzEIZfsyrGuq0R5ffIykwcgbpDParNDmTRy6hHl1f_dtBa0oPFrtrVX2wegb0XaVXt6Wtsd_bBHWjHUpK_cjduQWeSYV8w0dB17Hg8WI29_CcnttuVo3LNKuKqshsFggrXouMRIQWi7FhNIzyKtHOXOZ2yMZ22nS3-XZlU14RXZhr2G0347Mm6b8KNPUmbq2Gi7yHcIhkEsHaE63UDNr4fKeyS31_nVVDkrX2KKwRaNXXmD7SDTMxZ5Xp-8xO44oeX4oS_07i8L2ie2FKIvKgC3BBaYnsCuyV6524yvyGs2C_HPUwysgjh86a2kiXcQ9NpUC44oYsyK7yyWxsW46uh5kDLCjhDJFER-6SHXBO8GJ9zh9s_HD30oYzpl2xdHM4g0bAFZgh1eooSB1VjRMabvZEGnn2HKKIXE-mxyk=s640-no?authuser=0"
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
