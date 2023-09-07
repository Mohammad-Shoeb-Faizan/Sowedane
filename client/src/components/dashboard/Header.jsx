import React, { useEffect, useState } from "react";
import { BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


function Header({ OpenSidebar }) {
  let navigate = useNavigate();
 const userEmail = localStorage.getItem("email")


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsPersonCircle className="icon" onClick={() => navigate("/profile")} />
        <span style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'teal' }}>Hello, {userEmail.split("@")[0]}</span>
        <button
          style={{ backgroundColor: "aqua", borderRadius: "10px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
