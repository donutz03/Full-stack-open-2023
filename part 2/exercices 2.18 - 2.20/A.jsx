import React, { useState } from 'react';
import axios from 'axios';

const CountryInfo = ({ country }) => {
  const { name, capital, area, flags, languages } = country;

  return (
    <div>
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Area: {area} km²</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flags.png} alt={`${name.common} Flag`} style={{ maxWidth: '200px' }} />
    </div>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchCountries = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${searchQuery}`)
      .then((response) => {
        const countriesData = response.data;

        if (countriesData.length === 0) {
          alert('No countries found');
        } else {
          setCountries(countriesData);
        }
      })
      .catch((error) => {
        console.log(error);
        setCountries([]);
        alert('Error occurred while fetching data');
      });
  };

  return (
    <div>
      <h2>Country Information</h2>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
        />
        <button onClick={searchCountries}>Search</button>
      </div>

      {countries.length > 1 && countries.length <= 10 ? (
        countries.map((country) => (
          <div key={country.name.common}>
            <p>{country.name.common}</p>
          </div>
        ))
      ) : (
        countries.length === 1 && <CountryInfo country={countries[0]} />
      )}
    </div>
  );
};

export default App;

