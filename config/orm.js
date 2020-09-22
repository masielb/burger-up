// Import MySQL connection
const connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableName], (err, result) => {

            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO  ??";
        connection.query(queryString, [table, cols, vals], (err, res) => {

			if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, cols, condition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ??";
        connection.query(queryString, [table, cols, condition], (err, res) => {

            if (err) throw err;
            cb(res);
        });
    }
};

// Exports ORM Object
module.exports = orm;