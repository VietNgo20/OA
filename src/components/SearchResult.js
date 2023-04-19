import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const SearchResult = ({ acronyms }) => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  const filteredAcronyms = acronyms?.filter((item) =>
    item.acronym.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="centered">
      <h1>Search Result:</h1>
      {filteredAcronyms?.length > 0 ? (
        <TableContainer  sx={{ width: 400, marginBottom: 5}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Acronym</TableCell>
                    <TableCell align="right">Definition</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {filteredAcronyms.map((acronym) => (
                    <TableRow
                    key={acronym.acronym}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        {acronym.acronym}
                    </TableCell>
                    <TableCell align="right">{acronym.definition}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      ) : (
        <h3>Not found!</h3>
      )}
      <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default SearchResult;
