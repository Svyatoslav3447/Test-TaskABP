import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

import { FaCarSide } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__info">
            <a href="/" className="footer__logo">
              <FaCarSide />
              <span>CarShowroom</span>
            </a>

            <p>
              Your one-stop shop for discovering and reviewing the best cars.
            </p>
          </div>

          <div className="footer__column">
            <h3>Links</h3>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Vehicles</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Resources</h3>

            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Follow Us</h3>

            <div className="footer__social">
              <a href="/">
                <FiInstagram />
              </a>

              <a href="/">
                <FiFacebook />
              </a>

              <a href="/">
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © 2024 CarShowroom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
