import path from 'path';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  const dir = path.resolve(`${__dirname}\\..\\public\\index.html`);
  res.sendFile(dir);
});

app.get('/api', (req, res) => {
  res.send({ test: 'data' });
});

server.listen(3000);
