const express = require('express');
const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function auth(req, res, next) {
  const token = req.headers['authorization'];
  if (token === '12345') next();
  else res.status(401).send('Unauthorized');
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Public Route');
});

app.get('/secure', auth, (req, res) => {
  res.send('Secure Route Accessed');
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
