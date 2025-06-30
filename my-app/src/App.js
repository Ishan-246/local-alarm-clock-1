import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true); // 1️⃣

  const toggleText = () => {                        // 2️⃣
    setIsVisible(!isVisible);                       // 3️⃣
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Show/Hide Text</h1>
      <button onClick={toggleText}>Toggle</button>  {/* 4️⃣ */}
      {isVisible && <p>This is some hidden text!</p>} {/* 5️⃣ */}
    </div>
  );
}

export default App;










