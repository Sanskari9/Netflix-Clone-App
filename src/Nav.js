import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "./netflix logo.png";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img onClick={()=>navigate('/')} className="nav_logo" src={logo} alt="netflix logo" />
        <img
          onClick={()=> navigate('/profile')}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
