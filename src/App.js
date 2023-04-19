// import logo from './logo.svg';
import './App.css';
// import Header from "./components/Header";
import Footer from "./components/Footer";
// import Main from './components/Main';
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

  const searchAcronym = (searchTerm) => {
    const result = acronyms.find(
      (acronym) => (acronym.acronym ?? '').toLowerCase() === searchTerm.toLowerCase()
    );
    return result ? [result] : [];
  };

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage acronyms={acronyms} deleteAcronym={deleteAcronym} searchAcronym={searchAcronym} />} />
        <Route path="/new-acronym" element={<NewAcronym addAcronym={addAcronym} />} />
        <Route
          path="/search/:searchTerm"
          element={<SearchResult acronyms={acronyms} searchAcronym={searchAcronym} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
  }
    
  export default App;
