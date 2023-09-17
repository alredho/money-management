const {userTest, addUser, getUsers, getUserById, editUser, deleteUser} = require('../handlers/UserHandlers');

const userRoutes = [
    {
      method: 'POST',
      path: '/user/add' ,
      handler: addUser
    }, 
    
    {
      method: 'GET',
      path: '/user/get' ,
      handler: getUsers,
    }, 
    {
      method: 'GET',
      path: '/user/get/{id}' ,
      handler: getUserById,
    }, 
    {
      method: 'PUT',
      path: '/user/edit' ,
      handler: editUser,
    }, 
    {
      method: 'DELETE',
      path: '/user/delete' ,
      handler: deleteUser,
    },  
    /**
    
    
     */
    
      
];

module.exports = {userRoutes};