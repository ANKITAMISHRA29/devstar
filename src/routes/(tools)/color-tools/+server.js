const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const colors = ['red', 'green', 'blue', 'yellow'];

// API endpoint to get colors
app.get('/api/colors', (req, res) => {
  res.json(colors);
});

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')));

// Serve the main Svelte app
app.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
