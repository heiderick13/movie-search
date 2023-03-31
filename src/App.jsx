import "./App.css";
import { useState } from "react";
import Recipe from "./components/Recipe/RecipeCard";
import SearchBar from "./components/SearchBar/SearchBar";

const apiUrl = "www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // fetch function
  async function searchRecipes() {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    console.log(data);
    setIsLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchRecipes();
  }

  return (
    <div className="App">
      <SearchBar
        handleSubmit={handleSubmit}
        onChange={(e) => setQuery(e.target.value)}
        isLoading={isLoading}
        value={query}
      />
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => {
              <Recipe key={recipe.idMeal} name={recipe} />;
            })
          : "No recipes found"}
      </div>
      <h1>Receitas</h1>
    </div>
  );
}

export default App;
