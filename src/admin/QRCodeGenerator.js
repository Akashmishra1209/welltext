import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Slider, Card, CardContent } from '@mui/material';

export default function QRCodeGenerator() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Generate QR code URL
  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  // Handle button click to generate QR code
  function handleClick() {
    setWord(temp);
  }

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        QR Code Generator
      </Typography>
      <Card sx={{ margin: '20px auto', padding: 3, maxWidth: 400 }}>
        <CardContent>
          <TextField
            label="Enter text to encode"
            variant="outlined"
            fullWidth
            onChange={(e) => setTemp(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleClick} fullWidth>
            Generate
          </Button>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="subtitle1">Background Color:</Typography>
            <input type="color" onChange={(e) => setBgColor(e.target.value.substring(1))} />
            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>Dimension:</Typography>
            <Slider
              value={size}
              min={200}
              max={600}
              onChange={(e, newValue) => setSize(newValue)}
              valueLabelDisplay="auto"
              sx={{ marginTop: 2 }}
            />
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: 4 }}>
        {qrCode && (
          <>
            <img src={qrCode} alt="QR Code" s/>
            <Box sx={{ marginTop: 2 }}>
              <a href={qrCode} download>
                <Button variant="outlined" color="secondary">
                  Download
                </Button>
              </a>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
