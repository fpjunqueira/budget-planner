const express = require('express');
const app = express();

// Mock Entry Data
const entries = [
  { amount: 1000, date: '2020-06-01', type: 'input', description: 'Payment from customer', label: 'Invoice #123' },
  { amount: 500, date: '2020-06-02', type: 'output', description: 'Payment to supplier', label: 'Order #456' }
];

// GET Endpoint to return an Entry object
app.get('/entry', (req, res) => {
  res.json(entries[1]);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

