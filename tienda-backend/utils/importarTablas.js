const SequelizeAuto = require('sequelize-auto');
const path = require('path');

const auto = new SequelizeAuto('tienda', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  directory: path.resolve(__dirname, '../dao/models'), // Directorio donde se guardarán los modelos
  port: 3306, // Puerto de tu base de datos (si es diferente)
  additional: {
    timestamps: false, // Opciones adicionales según tus necesidades
  },
});

auto.run((err) => {
  if (err) throw err;
  console.log('Modelos generados exitosamente');
});
