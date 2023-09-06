import React from "react";
import { BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header({ OpenSidebar }) {
  let navigate = useNavigate();
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
      </div>
    </header>
  );
}

export default Header;
