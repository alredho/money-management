const { incomeHandler } = require("../Handlers/IncomeHandlers");

const incomeRoutes = [
    {
      method: 'GET',
      path: '/income' ,
      handler: incomeHandler,
    }, 
      
];

module.exports = {incomeRoutes};