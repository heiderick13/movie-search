import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

function SearchBar({ handleSubmit, handleUpdateQuery }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => handleUpdateQuery(e)} />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  );
}

export default SearchBar;
