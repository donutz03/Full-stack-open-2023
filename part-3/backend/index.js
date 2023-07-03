const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3001;

let phonebook = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122'
  }
];

app.use(express.json());
morgan.token('postData', (req) => {
    return JSON.stringify(req.body);
  });

app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms :postData')
  );

app.get('/api/persons', (req, res) => {
  res.json(phonebook);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = phonebook.find(entry => entry.id === id);
  
  if (person) {
    res.json(person);
  } else {
    res.status(404).send('Entry not found');
  }
});

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: 'Name or number missing' });
  }

  const existingPerson = phonebook.find(entry => entry.name === name);
  if (existingPerson) {
    return res.status(400).json({ error: 'Name must be unique' });
  }

  const id = Math.floor(Math.random() * 10000) + 1;
  const newEntry = {
    id,
    name,
    number
  };

  phonebook.push(newEntry);
  res.status(201).json(newEntry);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  phonebook = phonebook.filter(entry => entry.id !== id);
  res.status(204).end();
});

app.get('/info', (req, res) => {
  const requestTime = new Date();
  const numEntries = phonebook.length;
  const responseText = `
    <p>Phonebook has info for ${numEntries} people</p>
    <p>${requestTime}</p>
  `;
  res.send(responseText);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
