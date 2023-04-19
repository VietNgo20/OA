import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SearchResult = ({ acronyms }) => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  const filteredAcronyms = acronyms?.filter((item) =>
    item.acronym.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Result</h1>
      {filteredAcronyms?.length > 0 ? (
        <ul>
          {filteredAcronyms.map((acronym) => (
            <li key={acronym.acronym}>
              {acronym.acronym} - {acronym.definition}
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default SearchResult;
