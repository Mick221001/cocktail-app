import React from "react";

const CocktailDetails = ({ drink , onClose }) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure || ""} ${ingredient}`);
        }
    }
    return (
        <div className="modal">
            <button onClick={onClose}>Chiudi</button>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <p><strong>Categoria:</strong>{drink.strCategory}</p>
            <p><strong>Tipo:</strong>{drink.strAlcoholic}</p>
            <p><strong>Bicchiere:</strong>{drink.strGlass}</p>
            <p><strong>Ingredienti:</strong></p>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default CocktailDetails;
