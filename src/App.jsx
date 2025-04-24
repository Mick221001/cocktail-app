import React, {useState} from "react";
import './App.css';
import { searchCocktails, getRandomCocktails } from "./api";
import CocktailCard from "./components/CocktailCard";
import CocktailDetails from "./components/CocktailDetails";
import SearchBar from "./components/SearchBar";

function App() {
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSearch = async (query) => {
    const drinks = await searchCocktails(query);
    setResults(drinks || []);
    setSelected(null);
  };
  const handleRandom = async () => {
    const drinks = await getRandomCocktails();
    setResults(drinks);
    setSelected(null);
  };

return (
    <div className="App">
      <h1>Cocktail Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleRandom}>Cocktail Random</button>
     <div className="results">
       {results.length === 0 && <p>Nessun cocktail trovato</p>}
       {results.map((drink) => (
        <CocktailCard key={drink.idDrink} drink={drink} onSelect={setSelected} />
        ))}
     </div>
      {selected && (
        <CocktailDetails drink={selected} onClose={() => setSelected(null)} />
      )} 
    </div>
  );
}


export default App;