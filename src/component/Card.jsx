import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constant/route';

const Card = ({ item }) => {
  const navigate=useNavigate()
   const languages = item.languages
      ? Object.values(item.languages).join(" , ")
      : "";

  return (
    <article onClick={()=>navigate(routes.details)} className="w-[300px] flex flex-col gap-y-[15px] border border-solid border-black p-[15px] rounded-2xl cursor-pointer dark:border-white">
      <img className="h-[150px] object-contain" src={item.flags?.png} alt={`${item.name?.common} flag`} />
      <article className="flex flex-col gap-y-[10px]">
        <h2 className="font-bold text-xl dark:text-white">{item.name?.common}</h2>
        <p className=" dark:text-white">Population: {item.population.toLocaleString()}</p>
        <p className=" dark:text-white">Region: {item?.region}</p>
        <p className="dark:text-white">Capital: {item?.capital}</p>
        <p className="dark:text-white">Languages: {languages}</p>
      </article>
    </article>
  );
};

export default Card;