const express = require('express');
const path = require('path');
const app = express();

// Render uses port 10000 by default
const PORT = process.env.PORT || 10000;

// public ፎልደርን መፈለጊያ መንገድ
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// ለሙከራ የሚሆን API
app.get('/api/data', (req, res) => {
  console.log("Data requested at: " + new Date().toLocaleString());
  res.json({
    success: true,
    employees: { total: 120 },
    projects: { total: 5, list: [{ name: "MKC Project", region: "Addis", status: "Active" }] },
    lastUpdated: new Date().toLocaleString()
  });
});

// ማንኛውንም ጥያቄ ወደ index.html እንዲመራ ማድረግ
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// 0.0.0.0 መጠቀም ለ Render ግዴታ ነው
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running correctly on port ${PORT}`);
});
