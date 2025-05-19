import React from "react";
import search from "./images/search.svg";

const SearchFilter = ({
  searchInput,
  handleSearchChange,
  regionFilter,
  handleRegionChange,
}) => {
  return (
    <section className="flex justify-between flex-wrap gap-4 px-10 [@media(max-width:719px)]:justify-center">
      <div className="relative w-[300px]">
        <input
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
          className="w-full h-[50px] pl-10 pr-4 border border-gray-300 dark:border-slate-500 bg-white dark:bg-slate-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        />
        <img
          src={search}
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70 dark:invert"
        />
      </div>

      <select
        onChange={handleRegionChange}
        value={regionFilter}
        className="w-full max-w-xs h-[50px] px-4 bg-white dark:bg-slate-700 text-gray-800 dark:text-white border border-gray-300 dark:border-slate-500 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-gray-400"
      >
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default SearchFilter;
