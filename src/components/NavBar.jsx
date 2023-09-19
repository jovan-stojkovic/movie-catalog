import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <nav>
            <Logo />
            <div className="bignavlinks">
              <NavLink to="/toprated">TopRated</NavLink>
              <NavLink to="/trending">Trending</NavLink>
            </div>
            <img
              src="https://www.iconbolt.com/iconsets/coolicons/line-xl.svg"
              alt=""
            />
            <div className="navlinks">
              <NavLink to="/action">Action</NavLink>
              <NavLink to="/comedy">Comedy</NavLink>
              <NavLink to="/horror">Horror</NavLink>
              <NavLink to="/romance">Romance</NavLink>
              <NavLink to="/documentaries">Documentaries</NavLink>
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
