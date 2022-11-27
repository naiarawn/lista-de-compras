const mysql = require ("mysql2/promise"); 
var pool= mysql.createPool ({
        host: "sql10.freesqldatabase.com",
        user: "sql10581080",
        password: "cN7x1xHtT6",
        database: "sql10581080",
        port: "3306",
    })
    
module.exports = pool;
