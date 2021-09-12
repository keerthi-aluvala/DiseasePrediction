import React, { useState } from "react";
//import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide">
            <div className="links" id={openLinks ? "hidden" : ""}>
                <a>Home</a>
                <a>Feedback</a>
                <a>About Us</a>
                <a>Contact</a>
            </div>
            <button onClick={toggleNavbar }>
                {" "}
                <ReorderIcon/>
            </button> 
      </div>
      <div className="rightSide">
        
      </div>
    </div>
  );
}

export default Navbar;