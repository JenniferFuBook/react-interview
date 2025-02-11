import { useState } from 'react';
import { useInterval } from '../components/use-interval/useInterval';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0); // Timer state
  const [isRunning, setIsRunning] = useState<boolean>(false); // Running state

  // Increment the timer every second when running
  useInterval(
    () => {
      setSeconds((prev: number) => prev + 1);
    },
    isRunning ? 1000 : null // Only run if isRunning is true
  );

  // Handlers for buttons
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer} disabled={seconds === 0}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
