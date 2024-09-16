import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

// Define columns specific to a To-Do app
const columns = (handleToggleComplete, handleDeleteTask) => [
  { field: 'task', headerName: 'Task', width: 400 },
  { field: 'completed', headerName: 'Completed', width: 150, 
    renderCell: (params) => (
      <input
        type="checkbox"
        checked={params.value}
        onChange={() => handleToggleComplete(params.row.id)}
      />
    ),
  },
  { field: 'actions', headerName: 'Actions', width: 150, 
    renderCell: (params) => (
      <Button onClick={() => handleDeleteTask(params.row.id)}>Delete</Button>
    ),
  },
];

export default function ToDo() {
  // Initial state is loaded from localStorage or falls back to an empty array
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('todos');
    return savedRows ? JSON.parse(savedRows) : [];
  });
  const [newTask, setNewTask] = useState('');

  // Update localStorage whenever rows change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(rows));
  }, [rows]);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newRow = { id: Date.now(), task: newTask, completed: false };
    setRows([...rows, newRow]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleToggleComplete = (id) => {
    setRows(rows.map(row => 
      row.id === id ? { ...row, completed: !row.completed } : row
    ));
  };

  // Pass the handler functions to the columns definition
  const columnDefinitions = columns(handleToggleComplete, handleDeleteTask);

  return (
    <Paper sx={{ padding: 2, width: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          label="New Task"
          variant="outlined"
          fullWidth
        />
        <Button 
          onClick={handleAddTask} 
          variant="contained" 
          color="primary" 
          style={{ marginTop: 8 }}
        >
          Add Task
        </Button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columnDefinitions}
          pageSize={5}
          checkboxSelection={false}
          sx={{ border: 0 }}
        />
      </div>
    </Paper>
  );
}
