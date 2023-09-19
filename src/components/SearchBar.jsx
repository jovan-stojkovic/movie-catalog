// import { useState } from "react";
// import "../styles/searchbar.scss";

// const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((item) => {
//           console.log(item);
//           return (
//             value &&
//             item &&
//             item.show.name &&
//             item.show.name.toLowerCase().includes(value)
//           );
//         });
//         setResults(results);
//         console.log(results)
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };
//   return (
//     <div className="search-bar">
//       <form className="search-bar-form">
//         <input
//           type="search"
//           className="search"
//           placeholder="Search..."
//           value={input}
//           onChange={(e) => handleChange(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
