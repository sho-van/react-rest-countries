import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags, name, capital, population} = props.data
    return (
        <div className="single">
            <img src={flags.png} alt="" className="image"/>
            <h2>{name.common}</h2>
            <small>Capital name is <em>{capital}</em> with {population} humans</small>
        </div>
    );
};

export default Country;