const { userHandler } = require("../Handlers/UserHandlers");

const userRoutes = [
    {
      method: 'DELETE',
      path: '/user' ,
      handler: userHandler,
    }, 
      
];

module.exports = {userRoutes};