const iniciales = require('./utils/iniciales');
const validarToken = require('./utils/validarToken');
const rutas = require('./routes/index');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(validarToken);

// Ejecuta la función de inicialización al iniciar la aplicación
iniciales();


for (let i = 0; i < rutas.length; i++) {
  app.use('/api', rutas[i]);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {

  console.log(`Servidor escuchando en el puerto ${port}`);

});
