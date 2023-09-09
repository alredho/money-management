const { savingHandler } = require("../Handlers/SavingHandlers");

const savingRoutes = [
    {
      method: 'PUT',
      path: '/saving' ,
      handler: savingHandler,
    }, 
      
];

module.exports = {savingRoutes};