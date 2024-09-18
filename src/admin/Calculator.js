// src/Calculator.js
import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Paper } from '@mui/material';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input); // Use with caution!
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const styles = {
    calculator: {
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    input: {
      fontSize: '2rem',
      textAlign: 'right',
      marginBottom: '10px',
      height: '60px',
    },
    result: {
      fontSize: '2rem',
      margin: '10px 0',
      minHeight: '60px',
      textAlign: 'right',
      color: '#333',
    },
    button: {
      backgroundColor: '#1976d2', // Primary color
      color: 'white',
      fontSize: '1.5rem',
      height: '60px',
      '&:hover': {
        backgroundColor: '#115293', // Darker shade on hover
      },
    },
    clearButton: {
      backgroundColor: 'blue', // Red color for clear
      color: 'white',
      fontSize: '1.5rem',
      height: '60px',
      '&:hover': {
        backgroundColor: '#b71c1c', // Darker red on hover
      },
    },
    gridItem: {
      padding: '5px',
    },
  };

  return (
    <Paper style={styles.calculator} elevation={3}>
      <Typography variant="h4" align="center" gutterBottom>Calculator</Typography>
      <TextField
        variant="outlined"
        autoFocus
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter expression"
        style={styles.input}
      />
      <Typography variant="h6" style={styles.result}>
        {result}
      </Typography>
      <Grid container spacing={0}>
        {['7', '8', '9', '/'].map((item) => (
          <Grid item xs={3} key={item} style={styles.gridItem}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(item)}
              style={styles.button}
            >
              {item}
            </Button>
          </Grid>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <Grid item xs={3} key={item} style={styles.gridItem}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(item)}
              style={styles.button}
            >
              {item}
            </Button>
          </Grid>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <Grid item xs={3} key={item} style={styles.gridItem}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(item)}
              style={styles.button}
            >
              {item}
            </Button>
          </Grid>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <Grid item xs={3} key={item} style={styles.gridItem}>
            <Button
              variant="contained"
              fullWidth
              onClick={item === '=' ? handleCalculate : () => handleButtonClick(item)}
              style={styles.button}
            >
              {item}
            </Button>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleClear}
            style={styles.clearButton}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}