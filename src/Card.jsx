import React from 'react';

const Card = ({ item }) => {
   const languages = item.languages
      ? Object.values(item.languages).join(" , ")
      : "";

  return (
    <article className="w-[300px] border border-solid border-black">
      <img className="flag" src={item.flags?.png} alt={`${item.name?.common} flag`} />
      <article className="card_body">
        <h2 className="title">{item.name?.common}</h2>
        <p className="population">Population: {item.population.toLocaleString()}</p>
        <p className="region">Region: {item?.region}</p>
        <p className="capital">Capital: {item?.capital}</p>
        <p className="language">Languages: {languages}</p>
      </article>
    </article>
  );
};

export default Card;