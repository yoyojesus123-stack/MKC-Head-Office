const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON parsing
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint to provide dashboard data
app.get('/api/data', (req, res) => {
  try {
    // This is sample data. Later we will connect this to Google Sheets.
    const data = {
      success: true,
      employees: { total: 120, headOffice: 50, branchOffice: 70 },
      projects: {
        total: 15,
        list: [
          { name: "Clean Water Initiative", region: "Oromia", status: "Active" },
          { name: "Rural School Build", region: "Amhara", status: "On The Way" },
          { name: "Emergency Health Support", region: "SNNPR", status: "Expired" }
        ]
      },
      regions: [
        { name: "Oromia", count: 5 },
        { name: "Amhara", count: 4 },
        { name: "SNNPR", count: 3 },
        { name: "Tigray", count: 3 }
      ],
      lastUpdated: new Date().toLocaleString()
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Serve the HTML file for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
