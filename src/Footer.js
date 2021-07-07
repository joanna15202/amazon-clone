import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <a href="#" onClick={handleClick}>
        <div className="footer__backToTop">
          <span className="footer__backToTopNext">Back to top</span>
        </div>
      </a>
      <div className="footer__details">
        <div className="footer__verticalColumn">
          <div className="footer__verticalRow">
            <div className="footer__linkColumn">
              <div className="footer_columnHead">Get to Know Us</div>
              <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Sustainability</li>
                <li>Press Center</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
              </ul>
            </div>

            <div class="footer__colSpacer"></div>

            <div className="footer__linkColumn">
              <div className="footer_columnHead">Make Money with Us</div>
              <ul>
                <li>Sell products on Amazon</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Become a Delivery Driver</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>›See More Ways to Make Money with Us</li>
              </ul>
            </div>

            <div class="footer__colSpacer"></div>

            <div className="footer__linkColumn">
              <div className="footer_columnHead">Amazon Payment Products</div>
              <ul>
                <li>Amazon Rewards Visa Signature Cards</li>
                <li>Amazon.com Store Card</li>
                <li>Amazon Secured Card</li>
                <li>Amazon Business Card</li>
                <li>Amazon Business Line of Credit</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </ul>
            </div>

            <div class="footer__colSpacer"></div>

            <div className="footer__linkColumn">
              <div className="footer_columnHead">Let Us Help You</div>
              <ul>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Amazon Prime</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__line"></div>
      <div className="footer__logoSection">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            className="footer__logo"
          />
        </Link>
      </div>

      <div className="footer__contactInfo">
        <div className="footer__joannaContact">
          <p>Amazon-clone Project by Yu-Hsing (Joanna) Wang</p>
          <p>Contact Me</p>
          <p>
            <a
              href="https://github.com/joanna15202"
              className="footer__contactIcon"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yu-hsing-joanna-wang/"
              className="footer__contactIcon"
            >
              <LinkedInIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
