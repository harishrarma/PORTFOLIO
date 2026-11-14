const express = require('express');
const path = require('path');
const portfolio = require('./data/portfolio');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { ...portfolio, year: new Date().getFullYear() });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', project: 'hariom-sharma-portfolio', runtime: 'node-express' });
});

app.listen(port, () => {
  console.log(`Hariom portfolio running at http://localhost:${port}`);
});
