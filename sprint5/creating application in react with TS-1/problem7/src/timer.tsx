import React, { useState, useEffect } from 'react';

interface TimerState {
  seconds: number;
  isRunning: boolean;
}

const TimerApp: React.FC = () => {
  const [state, setState] = useState<TimerState>({ seconds: 0, isRunning: false });

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined = undefined;
    if (state.isRunning) {
      timer = setInterval(() => {
        setState((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
      }, 1000);
    } else if (!state.isRunning && state.seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [state.isRunning]);


  const startTimer = () => setState((prev) => ({ ...prev, isRunning: true }));
  const stopTimer = () => setState((prev) => ({ ...prev, isRunning: false }));
  const resetTimer = () => setState({ seconds: 0, isRunning: false });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Timer Application</h1>
      <h2>{state.seconds} seconds</h2>
      <button onClick={startTimer} disabled={state.isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!state.isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerApp;
