const sequelize = require('../dbconfig');
const user = require('../models/UserModel');
const userModel = require('../models/UserModel');

const userTest = (request, h) => {

    const response = h.response({
        status: 'success',
        message: 'Test Index',
        data: request.payload
    });

    response.code(200);
    return response;
};

const addUser = async (request, h) => {
    
    try {
        const {name, email, password, balance} = request.payload;
        const res = await userModel.create({name: name, email: email, password: password, balance: balance});
        const response = h.response({
            status: 'success',
            message: 'User successfully added',
            data: res,
        });
    
        response.code(200);
        return response;
    }
    catch(err) {
        const response = h.response({
            status: 'failed',
            message: 'Failed to add user',
            data: err,
        });
    
        response.code(500);
        return response;
    }
};


const getUsers = async (request, h) => {
    try {
        const res = await userModel.findAll();
        console.log(res);
        const response = h.response({
            status: 'success',
            message: 'User successfully fetched',
            data: res,
        });
    
        response.code(200);
        return response;
    } catch (error) {
        const response = h.response({
            status: 'failed',
            message: 'Fail to fetch users',
            data: error,
        });
    
        response.code(500);
        return response;
    }
};

const getUserById = async (request, h) => {
    try {
        const {id} = request.params;
        const res = await userModel.findByPk(id);
        if(res == undefined) throw new Error('no user found');
        const response = h.response({
            status: 'success',
            message: 'User successfully fetched',
            data: res,
        });
    
        response.code(200);
        return response;
    } catch (error) {
        const response = h.response({
            status: 'failed',
            message: 'Fail to fetch users',
            data: error.message,
        });
    
        response.code(500);
        return response;
    }
}

const editUser = async (request, h) => {
    try {
        const {id, name, email, password, balance} = request.payload;
        var values = {name: name , email : email, password: password, balance: balance };
        const res = await userModel.update(
            values,
            {where: {id: id}}
        );
        const response = h.response({
            status: 'success',
            message: 'User successfully edited',
            data: res,
        });
    
        response.code(200);
        return response;
    }
    catch(err) {
        const response = h.response({
            status: 'failed',
            message: 'Failed to edit user',
            data: err,
        });
    
        response.code(500);
        return response;
    }
}

const deleteUser =  async (request, h) => {
    try {
        const {id} = request.payload;
        const res = await userModel.destroy({where: {id: id}});
        if(res == undefined) throw new Error('no user found');
        const response = h.response({
            status: 'success',
            message: 'User successfully deleted',
            data: res,
        });
    
        response.code(200);
        return response;

    } catch (error) {
        const response = h.response({
            status: 'failed',
            message: 'Fail to delete user',
            data: error.message,
        });
    
        response.code(500);
        return response;
    }
    
}

module.exports = {userTest, addUser, getUsers, getUserById, editUser, deleteUser};