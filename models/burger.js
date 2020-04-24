const orm = require("../config/orm.js");

const burger = {

    selectAll: function() {
        orm.selectAll(function(res) {
            return res;
        });
    },

    insertOne: function(burger_name, devoured) {
        orm.insertOne(burger_name, devoured, function() {
            console.log("Added a burger!");
        });
    },

    updateOne: function(id) {
        orm.updateOne(id, function() {
            console.log("Burger devoured!");
        });
    }

};

module.exports = burger;