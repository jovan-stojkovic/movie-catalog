import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import Filter from "./Filter";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <nav>
            <Link to="/">
              <img
                className="logo"
                src="https://www.iconbolt.com/iconsets/elegant-set/tv.svg"
                alt="tv"
              />
            </Link>
            <ul>
              <li>
                <SearchButton />
              </li>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <Filter />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
