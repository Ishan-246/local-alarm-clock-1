import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(timer); // Cleanup
  }, []);

  // Check alarm
  useEffect(() => {
    const current = time.toTimeString().slice(0, 5); // "HH:MM" 
    if (alarmTime === current && !alarmTriggered) {
      alert("⏰ Alarm Ringing!");
      setAlarmTriggered(true);
    }
    if (alarmTime !== current) {
      setAlarmTriggered(false);
    }
  }, [time, alarmTime, alarmTriggered]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>

      <input
        type="time"
        onChange={(e) => setAlarmTime(e.target.value)}
        value={alarmTime}
      />
      <p>Set Alarm Time: {alarmTime || '--:--'}</p>
    </div>
  );
}

export default App;











