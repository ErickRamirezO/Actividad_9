const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (_, res) => {
  res.send('¡Hola, esta es la ruta principal!');
});

// Ruta secundaria
app.get('/ruta2', (_, res) => {
  res.send('¡Bienvenido a la ruta secundaria!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
