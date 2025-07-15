const express = require('express');
const path = require('path');
const app = express();
const PORT = 3051;

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Lanzar el servidor
app.listen(PORT, () => {
  console.log(`Servidor lanzado en http://localhost:${PORT}`);
});
