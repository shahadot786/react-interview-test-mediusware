import React from "react";

export default function Search({
  searchQuery,
  handleSearchChange,
  handleKeyDown,
}) {
  return (
    <div className="m-2 text-center">
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
