import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import "../styles/styles.scss";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <nav>
            <Link to={"/"}>
              <img
                className="logo"
                src="https://www.iconbolt.com/iconsets/elegant-set/tv.svg"
                alt="Home"
              />
            </Link>
            <div className="navlinks">
              <NavLink className="nav-link" to="/toprated">
                TopRated
              </NavLink>
              <NavLink className="nav-link" to="/action">
                Action
              </NavLink>
              <NavLink className="nav-link" to="/comedy">
                Comedy
              </NavLink>
              <NavLink className="nav-link" to="/horror">
                Horror
              </NavLink>
              <NavLink className="nav-link" to="/romance">
                Romance
              </NavLink>
              <NavLink className="nav-link" to="/documentaries">
                Documentaries
              </NavLink>
            </div>
            <ul>
              <li>
                <SearchButton />
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
