const mysql = require('mysql');

var pool = mysql.createPool({
    "user": "root",
    "password": "api_node",
    "database": "17601",
    "host": "localhost",
    "port": 3306
});

exports.pool = pool;