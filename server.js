const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/hello', (req, res) => res.send('Hello Kno-It!'));

app.get('/', (req, res) => {
  res.send('Kno-It backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});