const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root",
    "password": "170601",
    "database": "api_node",
    "host": "localhost",
    "port": 3306
});

exports.pool = pool;