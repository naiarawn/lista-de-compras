import axios from 'axios';
import { useEffect, useState } from 'react';
import CadaProduto from '../components/CadaProduto'
import SemProduto from './SemProduto';

export default function ListaProdutos(){

  const URL = "http://localhost:3333/produtos/"
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
 
  async function getData(){
    const response = await axios.get(URL)
    setData(response.data)
  }

    function deleteProduct(idprodutos) {
      axios
        .delete(`http://localhost:3333/produtos/${idprodutos}`)
        .then(() => {
          alert("Produto removido!");
          getData()
        });
    }

    function infoProduct(idprodutos) {
      axios
        .get(`http://localhost:3333/produtos/${idprodutos}`)
        .then((res) => {
          alert(res.data.name);
        });
    }
    

  return(
    <div>
      
      {!!data.length ? data.map((data, i) =>{
        return (<CadaProduto title={data.name} key={i} click={() => {deleteProduct(data.idprodutos)}} info={() => {infoProduct(data.idprodutos)}}/>)
      })
      : (<SemProduto />)}
    </div>
  )

}