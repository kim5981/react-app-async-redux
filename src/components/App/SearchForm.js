import React from "react";

const SearchForm = props => {
    return (
        <>
        <form>
          <input
            type="search"
            name="search"
            onChange={ props.handleChange }
            value=""
          />
          <button id="homeSearch" onClick={ props.submitSearch }> Search </button>
        </form>
        </>
    )
}

export default SearchForm;