import React from "react";

function ContactSearch({ searchValue, setSearchValue }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Contacts"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default ContactSearch;
