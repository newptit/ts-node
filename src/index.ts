import express from 'express';
import path from 'path';

const app = express();

const dir = path.resolve(`${__dirname}\\..\\public\\index.html`);

app.get('/', (req, res) => {
  res.sendFile(dir);
});

app.get('/api', (req, res) => {
  res.send({ test: 'data' });
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});