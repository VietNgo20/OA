import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, TextField} from '@mui/material';


const NewAcronym = ({ acronyms, addAcronym }) => {
  const navigate = useNavigate();
  const [acronym, setAcronym] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (acronym.trim() !== '' && definition.trim() !== '') {
      addAcronym({ acronym, definition });
      navigate(-1);
    }
  };

  if (!Array.isArray(acronyms)) {
    acronyms = [];
  }

  return (
    <div class="centered">
      <h1>New Acronym</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
          <TextField
            type="text"
            label="New Acronym"
            value={acronym}
            onChange={(event) => setAcronym(event.target.value)}
          />
          <TextField
            type="text"
            label="New Definition"
            sx={{marginLeft: 1}} 
            value={definition}
            onChange={(event) => setDefinition(event.target.value)}
          />
        <Button variant="contained" sx={{height: 55, marginLeft: 1}}type="submit">Add</Button>
        <Button variant="contained" color="error" sx={{height: 55, marginLeft: 1}} onClick={() => navigate(-1)}>Cancel</Button>
      </form>
    </div>
  );
};

export default NewAcronym;
