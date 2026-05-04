const express = require('express');
const path = require('path');
const app = express();

// Render uses port 10000 by default, but we should use process.env.PORT
const PORT = process.env.PORT || 10000;

// Step 1: Tell express where to find your HTML/CSS/JS files
app.use(express.static(path.join(__dirname, 'public')));

// Step 2: Create the API data endpoint
app.get('/api/data', (req, res) => {
  res.json({
    success: true,
    employees: { total: 120 },
    projects: {
      total: 5,
      list: [
        { name: "Water Project", region: "Oromia", status: "Active" },
        { name: "School Construction", region: "Amhara", status: "Active" },
        { name: "Medical Support", region: "SNNPR", status: "On Progress" }
      ]
    },
    lastUpdated: new Date().toLocaleString()
  });
});

// Step 3: Serve the index.html for any other URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Step 4: Start the server on host 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
