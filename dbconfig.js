const Sequelize = require('sequelize');

const sequelize = new Sequelize('money_management', 'root', '0000', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});


sequelize.authenticate().then(() => {
    console.log("Connected to database!");
}).catch(() => {
    console.log("Could not connect!");
});

module.exports = sequelize;