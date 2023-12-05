const express = require('express');
const app = express();
const PORT = 3000; // Puedes cambiar el puerto si es necesario

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, esta es la ruta principal!');
});

// Ruta secundaria
app.get('/ruta2', (req, res) => {
  res.send('¡Bienvenido a la ruta secundaria!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
