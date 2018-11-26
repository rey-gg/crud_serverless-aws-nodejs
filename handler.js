'use strict';

// Include events
const create = require('./create.js');
const getAll = require('./get-all.js');
const getUser = require('./get-user.js');
const update = require('./update.js');
const deleteUser = require('./delete.js');

// Create
module.exports.create = (event, context, callback) => {

    create(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });

};

// Get All Users
module.exports.users = (event, context, callback) => {
    getAll(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
};

// Get User
module.exports.user = (event, context, callback) => {
    getUser(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
};

// Update
module.exports.update = (event, context, callback) => {

    update(event, (error, result) => {

        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });

};

// Delete
module.exports.delete = (event, context, callback) => {

    deleteUser(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });

};
