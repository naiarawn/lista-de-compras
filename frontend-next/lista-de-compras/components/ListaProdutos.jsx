import axios from 'axios';
import { useEffect } from 'react';
import CadaProduto from '../components/CadaProduto'

export default function ListaProdutos(){

  useEffect(() => {
    getData()
  }, []);

  const getData = async e => {
    axios.get("http://localhost:3333/produtos/")
    .then((response) =>{
      console.log(response)
      response.data 
    })
    .catch(() =>{
      console.log("erro")
    })
 
  }
  return(
    <div>
      <CadaProduto />
      <CadaProduto />
      <CadaProduto />
      <CadaProduto />

    </div>
  )
}