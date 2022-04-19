import React, { useState, useEffect } from 'react';
import DisplayPhrase from './components/DisplayPhrase';
import './App.css';
import axios from 'axios';

function App() {
  const [phrase, setPhrase] = useState();


  const getPhrase = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {console.log(data);setPhrase(data[0])
    
    });
  }
  useEffect(() => {
    getPhrase();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
      <DisplayPhrase phrase={phrase} />
      <button type="button" onClick={getPhrase}>New phrase</button>
      </header>
    </div>
  );
}

export default App;
