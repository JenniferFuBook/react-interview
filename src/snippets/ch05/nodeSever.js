import express from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
const __dirname = path.dirname(__filename);

// Initialize an Express app
const app = express();
const PORT = 3000;

// Define an API route to serve data from a local JSON file
app.get('/api/data', async (req, res) => {
  try {
    // Construct absolute path to data.json
    const dataPath = path.resolve(__dirname, 'data.json');

    // Asynchronously read the content of data.json
    const data = await readFile(dataPath, 'utf-8');

    // Parse the file content and return it as a JSON response
    const jsonData = JSON.parse(data);

    // Log the data content on the server console
    console.log('Read data from data.json:', jsonData);

    // Set CORS headers to allow requests from the specified origin
    // res.header('Access-Control-Allow-Origin', 'https://ui.myapp.com');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    // res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type'); 
    // res.header('Access-Control-Allow-Credentials', 'true');
  
    // Parse the file content and return it as a JSON response
    res.json(jsonData);

  } catch (err) { // Catch and log file read errors, then return a 500 response
    console.error('File read error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Optional global error-handling middleware for uncaught errors
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
