import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { countryApi } from "../api/CountriesApi";

const Details = () => {
  const { id } = useParams(); 
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    countryApi().then((data) => {
      const found = data.find((c) => c.cca3 === id);
      setCountry(found);
    });
  }, [id]);

  if (!country) return <p className="text-center text-red-500">Country not found</p>;

  return (
    <section className="py-[100px] dark:h-screen flex justify-center">
      <section>
         <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        ← Back
      </button>
      <section className="flex gap-x-10 items-center">
        <img
          src={country.flags?.png}
          alt="country"
          className="w-[800px] h-[400x] object-cover rounded "
        />
        <section className="flex flex-col gap-y-[30px]">
          <h2 className="font-bold text-[30px] dark:text-white">{country.name?.common}</h2>
           <section className="flex gap-x-20">
           <article className="flex flex-col gap-y-4">
          <span className="dark:text-white"><strong>Native Name: </strong>{country.name?.common}</span>
          <span className="dark:text-white"><strong>Population: </strong> {country.population.toLocaleString()}</span>
          <span className="dark:text-white"><strong>Region: </strong> {country.region}</span>
          <span className="dark:text-white"><strong>Subregion: </strong> {country.subregion}</span>
          <span className="dark:text-white"><strong>Capital: </strong> {country.capital?.[0]}</span>
        </article>
        <article className="flex flex-col gap-y-4">
          <span className="dark:text-white"><strong>Region: </strong> {country.tld?country.tld:""}</span>
         <span className="dark:text-white">
        <strong>currencies:</strong> {country.currencies ? Object.values(country.currencies)[0].symbol : ""}
        </span>
           <span className="dark:text-white"><strong>Languages: </strong> {country.languages && Object.values(country.languages).join(", ")}</span>
        </article>
        </section>
        </section>
       
      </section>
      </section>
     
    </section>
  );
};

export default Details;
