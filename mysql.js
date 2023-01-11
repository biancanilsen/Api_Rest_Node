const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root",
    "password": "170601",
    "database": "api_node",
    "host": "localhost",
    "port": 3306
});

exports.pool = pool;

//  const mysql = require ('mysql2');

//  var connection = mysql.createConnection({
//     host : 'localhost',
//     database : 'study',
//     user: 'root',
//     password: '170601'
//  });

//  connection.connect(function (error){
//     if(error){
//         throw error;
//     }
//     else{
//         console.log('MySQL Database is connected Succcesfully')
//     }
//  });
//  module.exports = connection;