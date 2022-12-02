import axios from 'axios';
import { useEffect, useState } from 'react';
import CadaProduto from '../components/CadaProduto'
import SemProduto from './SemProduto';

export default function ListaProdutos(){

  const URL = "http://localhost:3333/produtos/"
  const [data, setData] = useState()

  useEffect(() => {
    async function getData(){
      const response = await axios.get(URL)
      setData(response.data)
    }
    getData()
  }, [])
 

  // function deletePost() {
  //   axios
  //     .delete("/produtos/:idprodutos")
  //     .then(() => {
  //       alert("Post deleted!");
  //       setData(null)
  //     });
  // }

  // const deletePost = async (data) => {
  //   await axios.delete(URL+ "/:" + data.idprodutos);
  //   setPosts(posts.filter((p) => p.idprodutos !== data.idprodutos));
  // };



  return(
    <div>
      
      {data ? data.map((data, i) =>{
        return (<CadaProduto title={data.name} key={i} click={() => deletePost(i)}/>)
      })
      : <SemProduto />}
      
    </div>
  )

}