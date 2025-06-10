const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Add this to parse JSON bodies

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

// POST /beans - Add a new coffee bean
app.post('/beans', (req, res) => {
  const { id, name, roast, stock } = req.body;
  if (
    typeof id !== 'number' ||
    typeof name !== 'string' ||
    typeof roast !== 'string' ||
    typeof stock !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  // Check for duplicate id
  if (beans.some(bean => bean.id === id)) {
    return res.status(400).json({ error: 'Bean with this id already exists' });
  }
  const newBean = { id, name, roast, stock };
  beans.push(newBean);
  res.status(201).json(newBean);
});

app.get('/', (req, res) => {
  res.send('Acme Coffee Store Inventory API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
