const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// In-memory coffee beans inventory
const beans = [
  { id: 1, name: 'Ethiopian Yirgacheffe', roast: 'Light', stock: 25 },
  { id: 2, name: 'Colombian Supremo', roast: 'Medium', stock: 40 },
  { id: 3, name: 'Sumatra Mandheling', roast: 'Dark', stock: 15 }
];

// GET /beans - List all coffee beans
app.get('/beans', (req, res) => {
  res.json(beans);
});

app.get('/', (req, res) => {
  res.send('Acme Coffee Store Inventory API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
