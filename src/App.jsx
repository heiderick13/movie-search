import "./App.css";
import Recipe from "./components/Recipe/Recipe";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Recipe />
      <h1>Receitas</h1>
    </div>
  );
}

export default App;
