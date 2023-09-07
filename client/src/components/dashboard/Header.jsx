import React from "react";
import { BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header({ OpenSidebar }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    // Clear the JWT token from local storage (or cookies, if that's where you store it)
    localStorage.removeItem("token");

    // Redirect the user to the login page or perform any other necessary action
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
        <button style={{ backgroundColor: 'blue', borderRadius: '10px' }} onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
