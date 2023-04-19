import React, { useState } from 'react';
import {Button} from '@mui/material';

function NewButton() {
    return (
      <div>
          <Button variant="contained" href="/new_acronym">
            Click
          </Button>
      </div>
    );
}

function Main() {
  const [acronyms, setAcronyms] = useState([
    { acronym: 'SDPR', definition: 'Social Development and Poverty Reduction' },
    { acronym: 'BC', definition: 'British Columbia' },
    { acronym: 'USA', definition: 'United States of America' },
  ]);
  const [newAcronym, setNewAcronym] = useState('');
  const [newDefinition, setNewDefinition] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  function handleAddAcronym() {
    if (newAcronym && newDefinition) {
      setAcronyms(acronyms.concat({ acronym: newAcronym, definition: newDefinition }));
      setNewAcronym('');
      setNewDefinition('');
    }
  }

  function handleDeleteAcronym(index) {
    setAcronyms(acronyms.filter((_, i) => i !== index));
  }

  function handleSearchAcronym() {
    const result = acronyms.find(({ acronym }) => acronym === searchTerm);
    setSearchResult(result?.definition || 'Not Found');
  }

  return (
    <div>
      <h1>Acronym Manager</h1>
      <h2>Add Acronym</h2>
      <input
        type="text"
        placeholder="Acronym"
        value={newAcronym}
        onChange={(e) => setNewAcronym(e.target.value)}
      />
      <input
        type="text"
        placeholder="Definition"
        value={newDefinition}
        onChange={(e) => setNewDefinition(e.target.value)}
      />
      <button onClick={handleAddAcronym}>Add Acronym</button>
      <h2>Acronyms List</h2>
      <ul>
        {acronyms.map(({ acronym, definition }, index) => (
          <li key={index}>
            {acronym}: {definition}
            <button onClick={() => handleDeleteAcronym(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Search Acronym</h2>
      <input
        type="text"
        placeholder="Acronym"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearchAcronym}>Search</button>
      {searchResult && <p>{searchResult}</p>}
      <NewButton />
    </div>
    
  );
}


export default Main;
