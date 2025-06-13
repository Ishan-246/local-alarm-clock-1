import React, { useState } from 'react'; 

function App() {
  const quotes = [                                
    "Believe in yourself!",
    "Keep pushing forward!",
    "Never give up!",
    "Stay positive, work hard, make it happen.",
    "Every day is a new beginning."
  ];

  const [quote, setQuote] = useState(quotes[0]);  

  const generateQuote = () => {                   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);                
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>                               
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );






















}

export default App;