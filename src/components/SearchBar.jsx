import React from "react";

const SearchBar = ({ value, isloading, handleSubmit, onChange }) => {
  return (
    <div>
      <form className="box" onSubmit={handleSubmit}>
        <input
          value={value}
          disabled={isloading}
          onChange={onChange}
          placeholder="search here"
          className="search"

        />
        <input
          disabled={isloading || !value}
          type="submit"
          value="search"
          className="buttonin"
        />
      </form>
     </div>
  );
};

export default SearchBar;
