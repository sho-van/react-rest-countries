import React, {useEffect, useState} from 'react';
import './Countries.css'
import Country from "./Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    },[])

    return ( countries.map((country) => (
        <div>
            <Country key={country.name.common} data={country}/>
        </div>

            // <div>
            //     <img src={country.flags.png} alt=""/>
            //     <h1>{country.name.common}</h1>
            //     <p>Capital : {country.capital}</p>
            // </div>
        ))
    );
};

export default Countries;