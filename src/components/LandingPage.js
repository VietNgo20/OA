import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';


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
    <div class="centered">
      <h1>Welcome!</h1>
      <form onSubmit={handleSearch} style={{ padding: '20px' }}>
          <TextField
            id="margin-normal"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        <Button variant="contained" sx={{height: 55, marginLeft: 1}} type="submit" >Search</Button>
      </form>

      <Button variant="contained" onClick={() => navigate('/new-acronym')}>New Acronym</Button>
      <TableContainer sx={{ width: 800, marginTop: 5 }}  component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Acronym</TableCell>
            <TableCell align="right">Definition</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {acronyms.map((acronym) => (
            <TableRow
              key={acronym.acronym}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {acronym.acronym}
              </TableCell>
              <TableCell align="right">{acronym.definition}</TableCell>
              <TableCell align="right"> 
                <Button variant="contained" onClick={(event) => handleDelete(event, acronym.acronym)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
      
    </div>
  );
};

export default LandingPage;
