import React,{useState,useEffect} from 'react'
import { countryApi } from '../api/CountriesApi'
import Card from '../Card'

const Countries = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
      countryApi().then((data)=>setData(data)).catch((error)=>setError(error)).finally(()=>setLoading(false))
    }, [])

    
    
    
  return (
    <section className='flex flex-wrap justify-center gap-[20px]'>
      {data.map((country,index) => (
        <Card key={index} item={country} />
      ))}
    </section>
  );
}

export default Countries