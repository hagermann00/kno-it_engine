const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.get('/hello', (req, res) => res.send('Hello Kno-It!'));

app.get('/', (req, res) => {
  res.send('Kno-It backend is running!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
app.get('/hello', (req, res) => res.send('Hello Kno-It!'));
