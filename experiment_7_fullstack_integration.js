// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors());

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Phone', price: 20000 }
  ]);
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));

// React Component (App.jsx)
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}
