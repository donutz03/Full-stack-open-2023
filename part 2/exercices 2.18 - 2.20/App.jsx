import React, { useState } from 'react';
import axios from 'axios';

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Languages: {country.languages.map(lang => lang.name).join(', ')}</p>
      {/* Add other relevant country information */}
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

        if (countriesData.length <= 10) {
          setCountries(countriesData);
        } else {
          setCountries([]);
          alert('Too many matches, please specify your search');
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

      {countries.length === 1 ? (
        <CountryInfo country={countries[0]} />
      ) : (
        countries.map((country) => (
          <div key={country.name.common}>
            <p>{country.name.common}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
