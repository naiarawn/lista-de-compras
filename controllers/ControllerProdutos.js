const db = require ('../config/db')

module.exports = {
    //criar
    async insert(req,res) {
        let data = {
            "name": req.body.name,
            "category": req.body.category,
            "priority": req.body.priority,
            "price": req.body.price,
            "whereToBuy": req.body.whereToBuy,
            "description": req.body.description

        }
        console.log(data);

        try {
            let response = await db.query('INSERT INTO produtos SET ?', [data]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },    
    async update(req, res) {
        let idprodutos = req.params.idprodutos;
        let data = {
            "name": req.body.name,
            "category": req.body.category,
            "priority": req.body.priority,
            "price": req.body.price,
            "whereToBuy": req.body.whereToBuy,
            "description": req.body.description
        }
        try {
            let response = await db.query('UPDATE produtos SET ? WHERE idprodutos = ?', [data, idprodutos]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
//retornar todos
    async findAll(req, res){
        try {
            let response = await db.query('SELECT * FROM produtos');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    //retornar um item
    async findById(req, res){
        let idprodutos = req.params.idprodutos;
        try {
            let response = await db.query(`SELECT * FROM produtos WHERE idprodutos = ${idprodutos}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    //deletar
    async delete(req, res){
        let idprodutos = req.params.idprodutos;

        try {
            let response = await db.query(`DELETE FROM produtos WHERE idprodutos = ${idprodutos}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }
}
