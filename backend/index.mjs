// Import necessary modules
import express from "express";
import fetch from "node-fetch";
import cors from "cors"; // Import CORS middleware

// Create Express app
const app = express();
const port = 3001;

// Define the YouTube API URL
const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Use CORS middleware to allow requests from all origins
app.use(cors());

// Endpoint to handle search requests
app.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    const response = await fetch(YOUTUBE_SEARCH_API + query);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching search suggestions");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
