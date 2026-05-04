const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// This API provides the data to your HTML dashboard
app.get('/api/data', (req, res) => {
  res.json({
    success: true,
    employees: { total: 45, headOffice: 20, branchOffice: 25 },
    projects: {
      total: 12,
      list: [
        { name: "Water Project", region: "Oromia", status: "Active" },
        { name: "School Building", region: "Amhara", status: "On The Way" },
        { name: "Health Center", region: "SNNPR", status: "Expired" }
      ]
    },
    regions: ["Oromia", "Amhara", "SNNPR", "Sidama"]
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
