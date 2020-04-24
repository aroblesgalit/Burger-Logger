const connection = require("./connect.js");

const orm = {
    
    selectAll: function() {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    },

    insertOne: function(burger_name, devoured) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [burger_name, devoured], function(err) {
            if (err) throw err;
            console.log("Added a burger!")
        });
    },

    updateOne: function(devoured, id) {
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, id], function(err) {
            if (err) throw err;
            console.log("Burger devoured!");
        });
    }
}

module.exports = orm;