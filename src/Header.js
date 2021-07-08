import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Navbar from "./Navbar";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__firstLine">
        {/* Amazon logo */}
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            className="header__logo"
          />
        </Link>

        {/* Deliver to */}
        <div className="header__nav header__option">
          <span className="header__optionLineOne"> Deliver to</span>
          <span className="header__optionLineTwo">
            <LocationOnIcon />
            New York
          </span>
        </div>

        {/* Search bar */}
        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="  Search Items"
          />
          <button className="header__searchIcon">
            <SearchIcon />
          </button>
        </div>

        {/* Header nav */}
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__secondLine">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
