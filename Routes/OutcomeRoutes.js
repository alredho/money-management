const { outcomeHandler } = require("../Handlers/OutcomeHandlers");

const outcomeRoutes = [
    {
      method: 'POST',
      path: '/outcome' ,
      handler: outcomeHandler,
    }, 
      
];

module.exports = {outcomeRoutes};