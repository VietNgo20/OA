import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from 'react';
import NewAcronym from "./components/NewAcronym";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SearchResult from './components/SearchResult';


function App() {
  const [acronyms, setAcronyms] = useState([]);

  const addAcronym = (newAcronym) => {
    setAcronyms([...acronyms, newAcronym]);
  };

  const deleteAcronym = (acronymToDelete) => {
    const updatedAcronyms = acronyms.filter(
      (acronym) => acronym.acronym !== acronymToDelete
    );
    setAcronyms(updatedAcronyms);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage acronyms={acronyms} deleteAcronym={deleteAcronym} />} />
        <Route path="/new-acronym" element={<NewAcronym addAcronym={addAcronym} />} />
        <Route
          path="/search/:searchTerm"
          element={<SearchResult acronyms={acronyms}/>}
        />
      </Routes>
      <Footer />
    </Router>
  );
  }
    
  export default App;
