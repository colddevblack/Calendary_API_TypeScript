import express from 'express';

const app = express();
var port = 3000;
app.get('/', (req, res) => {
  res.send('Teste Server');
});
const server = app.listen(port, () => {
  console.log(`Server is listing on port ${port}`);
});
server.on('error', e => console.error("Error", e));