import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constant/route';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const languages = item.languages
    ? Object.values(item.languages).join(" , ")
    : "";

  return (
    <article
      onClick={() => navigate(routes.details(item.cca3))}
      className="w-[300px] flex flex-col gap-y-[15px] border border-solid border-black p-[15px] rounded-2xl cursor-pointer dark:border-white"
    >
      <img
        className="h-[150px] object-contain"
        src={item.flags?.png}
        alt={`${item.name?.common} flag`}
      />
      <article className="flex flex-col gap-y-[10px]">
        <h2 className="font-bold text-xl dark:text-white">{item.name?.common}</h2>
        <span className=" dark:text-white"><strong className='font-bold'>Population:</strong> {item.population.toLocaleString()}</span>
        <span className=" dark:text-white"><strong className='font-bold'>Region: </strong> {item?.region}</span>
        <span className="dark:text-white"><strong className='font-bold'>Capital: </strong> {item?.capital}</span>
        <span className="dark:text-white"><strong className='font-bold'>Languages: </strong> {languages}</span>
      </article>
    </article>
  );
};

export default Card;
