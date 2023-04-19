import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ acronyms, deleteAcronym }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const handleDelete = (event, acronymToDelete) => {
    event.stopPropagation();
    deleteAcronym(acronymToDelete);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        <button type="submit">Search</button>
      </form>
      <ul>
        {acronyms.map((acronym) => (
          <li key={acronym.acronym}>
            {acronym.acronym} - {acronym.definition}{' '}
            <button onClick={(event) => handleDelete(event, acronym.acronym)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/new-acronym')}>New Acronym</button>
      
    </div>
  );
};

export default LandingPage;
