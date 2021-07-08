import React, { useState } from "react";
import "./Navbar.css";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { LiveTvTwoTone } from "@material-ui/icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let menus = [
    "Best Sellers",
    "Customer Service",
    "Prime",
    "New Releases",
    "Pharmacy",
    "Books",
    "Fasion",
    "Toys & Games",
    "Kindle Books",
    "Gift Cards",
  ];

  return (
    <div className="navbar">
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li onClick={closeMobileMenu}>
          <a href="" className="option" id="All">
            <MenuIcon className="menu-icon-All" />
            All
          </a>
        </li>
        {menus.map((menu) => (
          <li onClick={closeMobileMenu}>
            <a href="" className="option">
              {menu}
            </a>
          </li>
        ))}
      </ul>

      {/* Handle Mobile Mode */}
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
