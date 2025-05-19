import React, { useState, useEffect } from "react";
import { countryApi } from "../api/CountriesApi";
import Card from "./Card";
import { HashLoader } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";

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
      <SearchFilter
        searchInput={searchInput}
        handleSearchChange={handleSearchChange}
        regionFilter={regionFilter}
        handleRegionChange={handleRegionChange}
      />

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
