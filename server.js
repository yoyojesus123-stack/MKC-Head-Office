const express = require('express');
const path = require('path');
const app = express();

// Render የሚሰጠውን Port መጠቀም (ካልሆነ 10000)
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
  res.json({
    success: true,
    employees: { total: 120 },
    projects: { total: 5, list: [{ name: "Sample Project", region: "Addis Ababa", status: "Active" }] },
    lastUpdated: new Date().toLocaleString()
  });
});

// ማንኛውንም ሌላ ጥያቄ ወደ index.html እንዲሄድ ማድረግ
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// መስመሩ እንዲህ መሆኑን አረጋግጥ
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
