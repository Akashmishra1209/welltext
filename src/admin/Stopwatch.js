import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Paper,Typography,List,ListItem,Box,Divider } from '@mui/material';

// Function to format current time in Indian style (DD-MM-YYYY HH:MM:SS AM/PM)
const formatCurrentTime = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours24 = date.getHours();
  const hours = hours24 % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours24 >= 12 ? 'PM' : 'AM';

  return `${day}-${month}-${year} ${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
};

// Function to format elapsed time (HH:MM:SS.mmm)
const formatElapsedTime = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = milliseconds % 1000;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '16px',
    gap: '16px',
    fontFamily: 'Arial, sans-serif',
  },
  clockBox: {
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '16px',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
  },
  clockHeading: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  clockTime: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  stopwatchTitle: {
    fontSize: '2rem',
    margin: '16px 0',
  },
  stopwatchDisplay: {
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
  },
  stopwatchTime: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  stopwatchControls: {
    marginTop: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
  },
  stopwatchButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  startButton: {
    backgroundColor: '#4caf50',
  },
  pauseButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#ff9800',
  },
  lapButton: {
    backgroundColor: '#2196f3',
  },
  lapList: {
    maxHeight: '200px',
    overflowY: 'auto',
    width: '100%',
    maxWidth: '300px',
    marginTop: '16px',
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
  },
  lapItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 0',
    borderBottom: '1px solid #ddd',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  tab: {
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '4px 4px 0 0',
    marginRight: '4px',
  },
  activeTab: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    marginRight: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
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

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const startTime = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (isActive) {
      startTime.current = Date.now() - elapsedTime;
      const updateTimer = () => {
        setElapsedTime(Date.now() - (startTime.current || 0));
        rafId.current = requestAnimationFrame(updateTimer);
      };
      rafId.current = requestAnimationFrame(updateTimer);
    } else if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isActive, elapsedTime]);

  const handleStartStop = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsActive(false);
    setElapsedTime(0);
    setLaps([]);
  }, []);

  const handleLap = useCallback(() => {
    setLaps(prevLaps => [
      ...prevLaps,
      { number: prevLaps.length + 1, time: elapsedTime }
    ]);
  }, [elapsedTime]);

  const getLapAnalysis = () => {
    if (laps.length === 0) return null;
    const lapTimes = laps.map(lap => lap.time);
    const fastest = Math.min(...lapTimes);
    const slowest = Math.max(...lapTimes);
    const average = lapTimes.reduce((a, b) => a + b, 0) / lapTimes.length;
    return { fastest, slowest, average };
  };

  const lapAnalysis = getLapAnalysis();

  return (
    <div>
      <div style={styles.stopwatchDisplay}>
        <h2 style={styles.stopwatchTime}>{formatElapsedTime(elapsedTime)}</h2>
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
        <button
          style={{ ...styles.stopwatchButton, ...styles.lapButton }}
          onClick={handleLap}
          disabled={!isActive}
        >
          Lap
        </button>
      </div>
      {laps.length > 0 && (
        <div style={styles.lapList}>
          {laps.map((lap) => (
            <div key={lap.number} style={styles.lapItem}>
              <span>Lap {lap.number}</span>
              <span>{formatElapsedTime(lap.time)}</span>
            </div>
          ))}
        </div>
      )}
      {lapAnalysis && (
        <div style={styles.lapList}>
          <div style={styles.lapItem}>
            <span>Fastest Lap:</span>
            <span>{formatElapsedTime(lapAnalysis.fastest)}</span>
          </div>
          <div style={styles.lapItem}>
            <span>Slowest Lap:</span>
            <span>{formatElapsedTime(lapAnalysis.slowest)}</span>
          </div>
          <div style={styles.lapItem}>
            <span>Average Lap:</span>
            <span>{formatElapsedTime(lapAnalysis.average)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputTime, setInputTime] = useState('');

  useEffect(() => {
    let intervalId;
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 1) {
            clearInterval(intervalId);
            setIsActive(false);
            playNotificationSound();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const handleStart = () => {
    if (inputTime > 0) {
      setTime(inputTime * 60);
      setIsActive(true);
    }
  };

  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setInputTime('');
  };

  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play();
  };

  return (
    <div>
      <div style={styles.stopwatchDisplay}>
        <h2 style={styles.stopwatchTime}>{formatElapsedTime(time * 1000)}</h2>
      </div>
      <div style={styles.stopwatchControls}>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          placeholder="Enter minutes"
          style={styles.input}
        />
        <button
          style={{
            ...styles.stopwatchButton,
            ...(isActive ? styles.pauseButton : styles.startButton),
          }}
          onClick={isActive ? handlePause : handleStart}
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
};

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 1) {
            clearInterval(intervalId);
            setIsActive(false);
            playNotificationSound();
            setIsWorkTime(prev => !prev);
            return isWorkTime ? 5 * 60 : 25 * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time, isWorkTime]);

  const handleStartPause = () => setIsActive(prev => !prev);
  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
    setIsWorkTime(true);
  };

  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play();
  };

  return (
    <div>
      <div style={styles.stopwatchDisplay}>
        <h2 style={styles.stopwatchTime}>{formatElapsedTime(time * 1000)}</h2>
        <p>{isWorkTime ? 'Work Time' : 'Break Time'}</p>
      </div>
      <div style={styles.stopwatchControls}>
        <button
          style={{
            ...styles.stopwatchButton,
            ...(isActive ? styles.pauseButton : styles.startButton),
          }}
          onClick={handleStartPause}
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
};

const TimeZones = () => {
  const timeZones = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
  ];

  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      timeZones.forEach(zone => {
        newTimes[zone] = new Date().toLocaleString('en-US', { timeZone: zone });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Paper 
      elevation={3} 
      sx={{
        padding: 3,
        maxWidth: 400,
        margin: 'auto',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="h4" gutterBottom align="center" color="primary">
        World Clock
      </Typography>
      <List>
        {timeZones.map((zone, index) => (
          <React.Fragment key={zone}>
            <ListItem 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px 8px',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Box>
                <Typography variant="subtitle1">
                  {zone.split('/')[1].replace('_', ' ')}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {zone.split('/')[0]}
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                {times[zone]}
              </Typography>
            </ListItem>
            {index < timeZones.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default function EnhancedStopwatch() {
  const [activeTab, setActiveTab] = useState('stopwatch');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'stopwatch':
        return <Stopwatch />;
      case 'countdown':
        return <CountdownTimer />;
      case 'pomodoro':
        return <PomodoroTimer />;
      case 'timezones':
        return <TimeZones />;
      default:
        return <Stopwatch />;
    }
  };

  return (
    <div style={styles.container}>
      <Clock />
      <div style={styles.tabContainer}>
        <button
          style={{ ...styles.tab, ...(activeTab === 'stopwatch' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('stopwatch')}
        >
          Stopwatch
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'countdown' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('countdown')}
        >
          Countdown
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'pomodoro' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('pomodoro')}
        >
          Pomodoro
        </button>
        <button
          style={{ ...styles.tab, ...(activeTab === 'timezones' ? styles.activeTab : {}) }}
          onClick={() => setActiveTab('timezones')}
        >
          Time Zones
        </button>
      </div>
      {renderActiveComponent()}
    </div>
  );
}