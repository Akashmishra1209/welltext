import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BookmarkManager() {
  const [bookmarks, setBookmarks] = useState([]);
  const [url, setUrl] = useState('');

  // Load bookmarks from localStorage on initial render
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  // Update localStorage whenever bookmarks change
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = () => {
    if (url) {
      setBookmarks((prev) => [...prev, { id: prev.length, url }]);
      setUrl('');
    }
  };

  const deleteBookmark = (id) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
  };

  const columns = [
    { field: 'url', headerName: 'Bookmark URL', flex: 1 },
    {
      field: 'action',
      headerName: 'Actions',
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => deleteBookmark(params.id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      ),
      sortable: false,
      filterable: false,
      width: 100,
    },
  ];

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom align="center">
        Bookmark Manager
      </Typography>
      <Paper style={{ padding: 16, borderRadius: 8, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
        <TextField
          label="Bookmark URL"
          variant="outlined"
          size="small"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={addBookmark} size="small" fullWidth>
          Add
        </Button>
      </Paper>
      <div style={{ height: 400, marginTop: 20 }}>
        <DataGrid
          rows={bookmarks}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
}