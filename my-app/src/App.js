import React, { useState } from 'react';

function App() {
  const quotes = {
    quote1: "The only limit to our realization of tomorrow is our doubts of today.",
    quote2: "The future belongs to those who believe in the beauty of their dreams.",
    quote3: "Do not wait to strike till the iron is hot, but make it hot by striking."
  };

  const keys = Object.keys(quotes);
  const [quote, setQuote] = useState(quotes[keys[0]]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * keys.length);
    setQuote(quotes[keys[randomIndex]]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default App;

