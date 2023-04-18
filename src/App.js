// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewAcronym from "./components/NewAcronym";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
      <Router>
      <Header />
      <Routes>
          {/* <Route exact path='/' exact element={<Home />} /> */}
          <Route path='/new_acronym' element={<NewAcronym />} />
      </Routes>
      <Footer />
      </Router>
  );
  }
    
  export default App;
