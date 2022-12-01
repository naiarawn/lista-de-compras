import axios from 'axios';
import { useEffect, useState } from 'react';
import CadaProduto from '../components/CadaProduto'
import SemProduto from './SemProduto';

export default function ListaProdutos(){

  // const [dataForm, getData] = useState() 

  // useEffect(() => {
  //   getData()
  // }, []);

  // const getData = async e => {
  //   axios.get("http://localhost:3333/produtos/")
  //   .then((response) =>{
  //     console.log(response)
  //     response.data 
  //   })
  //   .catch(() =>{
  //     console.log("erro")
  //   })
 
  // }

  // const [dataForm, getData] = useState() 

  //  useEffect(() => {
  //   axios.get("http://localhost:3333/produtos/")
  //   .then((response) =>{
  //     console.log(response)
  //     getData(response.dataForm)
  //   })
  //   .catch(() =>{
  //     console.log("erro")
  //   })
  // }, []);

  const [data, setData] = useState()

  useEffect(() => {
    async function getData(){
      const response = await axios.get("http://localhost:3333/produtos/")
      setData(response.data)
    }
    getData()
  }, [])
 
  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return(
    <div>
      
      {data ? data.map((data, i) =>{
        return (<CadaProduto title={data.name} key={i}/>)
      })
      : <SemProduto />}
      
    </div>
  )
}