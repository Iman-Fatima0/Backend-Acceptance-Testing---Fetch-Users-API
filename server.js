// server.js
const express = require('express');
const app = express();

app.use(express.json());

// Fake database
let users = [
  { id: 1, username: 'john', email: 'john@example.com' },
  { id: 2, username: 'alice', email: 'alice@example.com' },
];

// Middleware for auth
function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || authHeader !== 'Bearer secret_token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// GET /api/users
app.get('/api/users', authMiddleware, (req, res) => {
  // No users case
  if (users.length === 0) {
    return res.status(404).json({ error: 'No users found' });
  }

  // Simulated crash case
  if (req.query.simulate === 'crash') {
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  // Success case
  res.status(200).json(users);
});

module.exports = app;
