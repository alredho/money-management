//const { userRoutes } = require("./Routes/UserRoutes");
//const { incomeRoutes } = require("./Routes/IncomeRoutes");
//const { outcomeRoutes } = require("./Routes/OutcomeRoutes");
//const { savingRoutes } = require("./Routes/SavingRoutes");

const { test, testOne, testTwo } = require("./handler");
   
routes = [
  {
    method: 'GET',
    path: '/test' ,
    handler: test,
  }, 
  {
    method: 'GET',
    path: '/test/one' ,
    handler: testOne,
  }, 
  {
    method: 'GET',
    path: '/test/two' ,
    handler: testTwo,
  }, 
];



/*
userRoutes.forEach(element => {
  routes.push(element)
});

incomeRoutes.forEach(element => {
  routes.push(element)
});

outcomeRoutes.forEach(element => {
  routes.push(element)
});

savingRoutes.forEach(element => {
  routes.push(element)
});


*/

module.exports = routes;