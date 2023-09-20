import React from "react";

function SearchBox({ searchByTag, setSearchByTag }) {
  const handleSearch = (e) => {
    setSearchByTag(e.target.value);
  };

  return (
    <>
      <form className="flex mx-auto rounded-md">
        <input
          type="text"
          placeholder="Search Gallery by Tags"
          value={searchByTag}
          onChange={handleSearch}
          className="md:w-1/2 w-full mx-10 md:mx-auto placeholder:font-poppins font-poppins border-2 border-black border-opacity-30 rounded-sm outline-0 focus:ring-0 focus:border0  focus:border-orange "
        />
      </form>
    </>
  );
}

export default SearchBox;