import React from "react";

const CocktailCard = ({ drink , onSelect }) => (
    <div className="card" onClick={()=> onSelect(drink)}>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <h3>{drink.strDrink}</h3>
    </div>
);
export default CocktailCard;