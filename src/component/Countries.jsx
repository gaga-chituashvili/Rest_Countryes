import React, { useState, useEffect } from "react";
import { countryApi } from "../api/CountriesApi";
import Card from "./Card";
import { HashLoader } from "react-spinners";
import search from "./images/search.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Countries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    setLoading(true);
    countryApi()
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    navigate(`?search=${value}`);
  };

  const handleRegionChange = (e) => {
    setRegionFilter(e.target.value);
  };

  const filteredCountries = data.filter((country) => {
    const matchesSearch = country.name?.common
      ?.toLowerCase()
      .includes(searchInput.toLowerCase());
    const matchesRegion =
      regionFilter === "" || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="flex flex-col gap-y-[20px] mt-[150px]">
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

      <section className="flex flex-wrap justify-center gap-[20px]">
        {loading && <HashLoader color="#3b103b" size={70} />}
        {filteredCountries.length > 0 &&
          filteredCountries.map((country, index) => (
            <Card key={index} item={country} />
          ))}
        <div
          className={
            filteredCountries.length === 0 ? "h-screen pt-[300px]" : ""
          }
        >
          {filteredCountries.length === 0 && (
            <p className="text-[30px] text-center text-lg dark:text-white text-black font-semibold">
              NOT FIND
            </p>
          )}
        </div>
      </section>
    </section>
  );
};

export default Countries;
