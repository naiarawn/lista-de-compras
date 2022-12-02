import axios from 'axios';
import { useEffect, useState } from 'react';
import CadaProduto from '../components/CadaProduto'
import SemProduto from './SemProduto';

export default function ListaProdutos(){

  const [data, setData] = useState()

  useEffect(() => {
    async function getData(){
      const response = await axios.get("http://localhost:3333/produtos/")
      setData(response.data)
    }
    getData()
  }, [])
 
  return(
    <div>
      
      {data ? data.map((data, i) =>{
        return (<CadaProduto title={data.name} key={i}/>)
      })
      : <SemProduto />}
      
    </div>
  )

}