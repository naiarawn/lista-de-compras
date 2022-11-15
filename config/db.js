const mysql = require ("mysql2/promise"); 
const DBS = async () => {
    const connection= await mysql.createConnection ({
        host: "sql10.freesqldatabase.com",
        user: "sql10573583",
        password: "cLK9xA6PNn",
        database: "sql10573583",
        port: "3306",
    })
}
module.exports = DBS();
