const Connection = require ('../dbconfig');
const {DataTypes} = require ('sequelize');

const dbConnection = Connection;

const user = dbConnection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},
{
    freezeTableName: true,
    timestamps: false
});

//dbConnection.sync({force: true});

module.exports = user;