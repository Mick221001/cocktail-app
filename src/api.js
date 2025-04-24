const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const searchCocktails = async (query) => {
    const res = await fetch(`${BASE_URL}search.php?s=${query}`);
    const data = await res.json();
    return data.drinks;
};

export const getRandomCocktails = async () => {
    const res = await fetch(`${BASE_URL}random.php`);
    const data = await res.json();
    return data.drinks[0];
};