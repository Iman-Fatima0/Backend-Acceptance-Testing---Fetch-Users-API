// index.js
const app = require('./server');
// require('dotenv').config();
// const PORT = process.env.PORT || 3000;

const PORT=3000;
app.listen(PORT, () => {
  console.log(`User Management API running on http://localhost:${PORT}`);
});
