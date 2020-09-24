//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateOne: function(cols, condition, cb) {
        orm.updateOne("burgers", cols, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger