import React from "react";
import { Link } from "react-router-dom";

// Import nav icons + styling
import { VscHome } from "react-icons/vsc";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiPlantLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="site">
        <div className="content">
          <div className="navbar">
            <div class="containLink">
              <Link to="/DailyTask">
                <VscHome className="iconStyle" />
              </Link>
              <Link to="/Calendar">
                <AiOutlineCalendar className="iconStyle" />
              </Link>
              <Link to="/MyPlants">
                <RiPlantLine className="iconStyle" />
              </Link>
              <Link to="/Profile">
                <FaRegUserCircle className="iconStyle" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
