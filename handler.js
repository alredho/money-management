const test = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Test Index'
    });

    response.code(200);
    return response;
};

const testOne = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Test One Success'
    });

    response.code(200);
    return response;
};

const testTwo = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Test Two Success'
    });

    response.code(200);
    return response;
};

module.exports = {test, testOne, testTwo};