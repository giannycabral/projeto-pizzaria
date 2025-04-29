const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // Serve arquivos estáticos da raiz

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});