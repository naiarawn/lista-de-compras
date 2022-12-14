const db = require ('../config/db')

module.exports = {
    //criar
    async insert(req,res) {
        let data = {
            "name": req.body.name,
            "priority": req.body.priority,
            "price": req.body.price,
            "whereToBuy": req.body.whereToBuy,
            "description": req.body.description

        }
        console.log(data);

        try {
            let response = await db.query('INSERT INTO Produtos SET ?', [data]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },    
    async update(req, res) {
        let idprodutos = req.params.idprodutos;
        let data = {
            "name": req.body.name,
            "priority": req.body.priority,
            "price": req.body.price,
            "whereToBuy": req.body.whereToBuy,
            "description": req.body.description
        }
        try {
            let response = await db.query('UPDATE Produtos SET ? WHERE idprodutos = ?', [data, idprodutos]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
//retornar todos
    async findAll(req, res){
        try {
            let response = await db.query('SELECT * FROM Produtos');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    //retornar um item
    async findById(req, res){
        let idprodutos = req.params.idprodutos;
        try {
            let response = await db.query(`SELECT * FROM Produtos WHERE idprodutos = ${idprodutos}`);
            res.json(response[0][0]);
        } catch (error) {
            console.log(error);
        }
    },
    //deletar
    async delete(req, res){
        let idprodutos = req.params.idprodutos;

        try {
            let response = await db.query(`DELETE FROM Produtos WHERE idprodutos = ${idprodutos}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
}
