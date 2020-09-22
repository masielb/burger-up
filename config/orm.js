// Import MySQL connection
const connection = require("../config/connection.js");

const orm = {
    all: function(tableName, cb) {
        var queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableName, cb], (err, res) => {

            if (err) throw err;
            // return result
            cb(result;)
        // });
    },
    insertOne: function(tableName, cb) {
        var queryString = `INSERT INTO  ${tableName}`;
        connection.query(queryString, vals, (err, res) => {

			if (err) throw err;
            cb(res);
        // });
    },
    updateOne: function(tableName, cb) {
        var queryString = `UPDATE ?? SET ? WHERE ${condition}`;
        connection.query(queryString, [tableName, obj], (err, res) => {

            if (err) throw err;
            cb(res);
        // });
    },
};

// Exports ORM Object
module.exports = orm;