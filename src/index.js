const express = require ('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const ControllerProdutos= require ('../controllers/ControllerProdutos')

app.post ('/produtos', ControllerProdutos.insert)
app.put ('/produtos/:idprodutos', ControllerProdutos.update)
app.get('/produtos', ControllerProdutos.findAll);
app.get('/produtos/:idprodutos',ControllerProdutos.findById);
app.delete('/produtos/:idprodutos',ControllerProdutos.delete);


app.listen(3333, () => console.log("Server is running."))
