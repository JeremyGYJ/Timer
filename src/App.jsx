import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count - 1);
    }, 1000);
  }
    , []);

  return <div> Time Remaining: {count}s </div>
}

export default function App() {
  const [showTimer, setShowTimer] = useState(true);
  const toggleTimer = () => setShowTimer(!showTimer)

  return (
    <div>
      <h1>React Timer App</h1>
      {showTimer && <Timer />}
      <button onClick={toggleTimer}>
        {showTimer ? 'HideTimer' : 'ShowTimer'}
      </button>
    </div>

  )
}
