import React, { useState, useEffect, useRef } from 'react';

// Function to format current time in Indian style (DD-MM-YYYY HH:MM:SS AM/PM)
const formatCurrentTime = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  const hours24 = date.getHours();
  const hours = hours24 % 12 || 12; // Convert to 12-hour format, ensuring '12' is shown correctly
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours24 >= 12 ? 'PM' : 'AM'; // Determine AM/PM
  
  return `${day}-${month}-${year} ${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '16px', // Adjust gap between elements as needed
  },
  clockBox: {
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '16px',
  },
  clockHeading: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  clockTime: {
    fontSize: '1.5rem',
  },
  stopwatchTitle: {
    fontSize: '2rem',
    margin: '16px 0',
  },
  stopwatchDisplay: {
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  stopwatchTime: {
    fontSize: '2rem',
  },
  stopwatchControls: {
    marginTop: '16px',
  },
  stopwatchButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    marginRight: '8px',
    fontSize: '1rem',
  },
  startButton: {
    backgroundColor: '#1976d2', // Primary color
  },
  pauseButton: {
    backgroundColor: '#dc004e', // Secondary color
  },
  resetButton: {
    backgroundColor: '#f44336', // Error color
  },
};

// Clock component to show real-time current time
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.clockBox}>
      <h1 style={styles.clockHeading}>Current Time</h1>
      <div style={styles.clockTime}>{formatCurrentTime(currentTime)}</div>
    </div>
  );
};

export default function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const startTime = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (isActive) {
      startTime.current = Date.now() - elapsedTime * 1000;
      const updateTimer = () => {
        setElapsedTime(Math.floor((Date.now() - startTime.current) / 1000));
        rafId.current = requestAnimationFrame(updateTimer);
      };
      rafId.current = requestAnimationFrame(updateTimer);
    } else {
      cancelAnimationFrame(rafId.current);
    }
    return () => cancelAnimationFrame(rafId.current);
  }, [isActive]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsActive(prev => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setElapsedTime(0);
  };

  return (
    <div style={styles.container}>
      <Clock />
      <h1 style={styles.stopwatchTitle}>Stopwatch</h1>
      <div style={styles.stopwatchDisplay}>
        <h2 style={styles.stopwatchTime}>{formatTime(elapsedTime)}</h2>
      </div>
      <div style={styles.stopwatchControls}>
        <button
          style={{
            ...styles.stopwatchButton,
            ...(isActive ? styles.pauseButton : styles.startButton),
          }}
          onClick={handleStartStop}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          style={{ ...styles.stopwatchButton, ...styles.resetButton }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
