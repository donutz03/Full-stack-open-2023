import React, { useState } from 'react';
import Filter from './Filter';
import axios from 'axios';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
  axios.get('/db.json') 
    .then(response => {
      setPersons(response.data.persons);
    })
    .catch(error => {
      console.log(error);
    });
}, []);


  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addPerson = (event) => {
  event.preventDefault();

  const personObject = {
    name: newName,
    number: newNumber,
  };

  const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
  if (existingPerson) {
    if (window.confirm(`${existingPerson.name} is already added to the phonebook. Replace the old number with a new one?`)) {
      axios.put(`/api/persons/${existingPerson.id}`, personObject) // Replace '/api/persons' with the appropriate API endpoint
        .then(response => {
          setPersons(persons.map(person => person.id === existingPerson.id ? response.data : person));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.log(error);
        });
    }
  } else {
    axios.post('/api/persons', personObject) // Replace '/api/persons' with the appropriate API endpoint
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        console.log(error);
      });
  }
};


    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
    <Notification message={errorMessage} />

      <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
