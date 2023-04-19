import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>New Acronym</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Acronym:
          <input
            type="text"
            value={acronym}
            onChange={(event) => setAcronym(event.target.value)}
          />
        </label>
        <label>
          Definition:
          <input
            type="text"
            value={definition}
            onChange={(event) => setDefinition(event.target.value)}
          />
        </label>
        <button type="submit">New Acronym</button>
        <button onClick={() => navigate(-1)}>Cancel</button>
      </form>
    </div>
  );
};

export default NewAcronym;
