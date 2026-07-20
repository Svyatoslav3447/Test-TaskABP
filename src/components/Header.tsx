import "../styles/index.css";
import { FiHeart, FiMoon } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="logo">
            <FaCar size={29} style={{ color: "#97E52F" }} />
            <span>CarShowroom</span>
          </Link>

          <nav className="nav">
            <ul className="nav__list">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "icon-btn icon-btn--active" : "icon-btn"
              }
              aria-label="Favorites"
            >
              <FiHeart size={22} />
            </NavLink>

            <button className="icon-btn" aria-label="Theme">
              <FiMoon size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
