import "../styles/navbar.scss";
import "../styles/search-button.scss";
import { useState } from "react";

const SearchIcon = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="input-wrapper">
          <input
            type="Search"
            className="search-input"
            placeholder="Type to search..."
          ></input>
        </div>
      )}
      <button className="navbar-button" onClick={() => setShow(!show)}>
        <img
          src="https://www.iconbolt.com/iconsets/flux-icons/search.svg"
          alt="search"
        />
      </button>
    </>
  );
};

export default SearchIcon;
