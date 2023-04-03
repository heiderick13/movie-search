import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

function SearchBar({ handleSubmit, handleUpdateQuery }) {
  return (
    <nav className="header">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => handleUpdateQuery(e)} />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export default SearchBar;
