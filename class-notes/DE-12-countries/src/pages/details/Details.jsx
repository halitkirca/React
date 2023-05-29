import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const Details = () => {
  const [country, setCountry] = useState([]);
  const {name} = useParams();

//! buraya App.js deki path ile geldiğimizde, home dan gelen yoldaki name sayesinde (useParam İLE name i yakalayıp), alttaki adresten, buraya name ile gelen  ülkenin verileri çekilecek, onunla ilgili birkaç özellik ekrana bastırılacak


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`).then((res)=>res.json()).then((data)=> setCountry(data));
  }, [name]);  
 console.log(country);
  
  return (<div>
  <img src={country[0].flags.png} alt="" />
    {country[0].name.common}
  </div>
  
  );
}

export default Details