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
  }, [searchQuery]);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    navigate(`?search=${value}`);
  };

  const filteredCountries = data.filter((country) =>
    country.name?.common?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="flex flex-col gap-y-[20px]">
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
      <section className="flex flex-wrap justify-center gap-[20px]">
        {loading && <HashLoader color="#3b103b" size={70} />}
         {filteredCountries.map((country, index) => (
            <Card key={index} item={country} />
          ))} 
      </section>
    </section>
  );
};

export default Countries;
