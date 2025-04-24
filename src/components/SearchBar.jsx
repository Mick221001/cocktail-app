import React from "react"; 

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.query.value;
        onSearch(value);
    }
    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="text" name="query" placeholder="Cerca cocktail..." />
            <button type="submit">Cerca</button>
        </form>
    );
};

export default SearchBar;