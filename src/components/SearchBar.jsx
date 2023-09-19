import { useState } from "react";
import "../styles/searchbar.scss"
import { fetchData } from "../helpers/fetchData";

const SearchBar = () => {
  const [input, setInput] = useState("");


const handleChange = (value) => {
    setInput(value)
    fetchData(value)
}
  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <input
          type="search"
          className="search"
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
