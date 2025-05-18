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
    <section className="flex flex-col gap-y-[20px]">
      <section className="flex justify-between flex-wrap gap-4 items-center">
        <div className="relative w-[300px]">
          <input
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search for a country..."
            className="w-full h-[50px] pl-10 pr-4 border border-solid border-black rounded-2xl"
          />
          <img
            src={search}
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        <select
          id="filter"
          onChange={handleRegionChange}
          value={regionFilter}
          className="h-[50px] px-4 border border-solid border-black rounded-2xl"
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
        {filteredCountries.length === 0 && (
          <p className="text-center text-lg text-red-500 font-semibold">
            NOT FIND
          </p>
        )}
      </section>
    </section>
  );
};

export default Countries;
