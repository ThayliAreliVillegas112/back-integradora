const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('tienda', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  directory: '../models',
  additional: {
    timestamps: false, 
  },
  define: {
    timestamps: false // Esta opción desactiva los timestamps en todos los modelos
  }
});



module.exports = sequelize;
