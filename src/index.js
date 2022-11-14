const express = require ('express')
const app = express();
app.use(express.json());
const ControllerProdutos= require ('./controllers/ControllerProdutos')
app.post ('/produto/insert', ControllerProdutos.insert)
app.put ('/produtos/update/:idprodutos', ControllerProdutos.update)
app.get('/produtos', ControllerProdutos.findAll);
app.get('/produtos/:id',ControllerProdutos.findById);
app.delete('/produtos/:id',ControllerProdutos.delete);


app.listen(3333, () => console.log("Server is running."))