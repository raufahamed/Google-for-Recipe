import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import SearchBar from "./components/SearchBar";
import { Home } from "./components/Home";
import { Contact } from "./components/contact";
import Loader from "./components/Loader";
const searchApi = "https://api.edamam.com/api/recipes/v2?type=public";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const searchrecipes = async () => {
    setIsLoading(true);
    setRecipes([]);
    const url = `${searchApi}&q=${
      query == "" ? "recipes" : query
    }&app_id=5fc4749d&app_key=b27b3a8ef5124e126cf9c39479f653f2`;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.hits);
    setIsLoading(false);
  };

  useEffect(() => {
    searchrecipes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchrecipes();
  };

  return (
    <div className="contains" id={"home"}>
      <Home scrollToElement={scrollToElement} />
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        isloading={isLoading}
      />
      {/* <Loader /> */}
      <div className="container-fluid" id={"recipe"}>
        <div style={{ position: "relative" }} className="recipes row">
          {isLoading ? <Loader /> : null}
          {recipes.map((recipe) => (
            <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
          ))}
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default App;