import axios from "axios";
import { useEffect, useState } from "react";
import CadaProduto from "../components/CadaProduto";
import Modal from "./Modal";
import SemProduto from "./SemProduto";

export default function ListaProdutos() {
  const URL = "http://localhost:3333/produtos/";
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios.get(URL);
    setData(response.data);
  }

  function deleteProduct(idprodutos) {
    axios.delete(`http://localhost:3333/produtos/${idprodutos}`).then(() => {
      alert("Produto removido!");
      getData();
    });
  }

    function infoProduct(idprodutos) {
      axios
        .get(`http://localhost:3333/produtos/${idprodutos}`)
        .then((res) => {
          tryShow()
          // alert(res.data.name);
          // return ( <Modal onClose={()=> setShow(false)} show={show} />)
        });
    }
    
    const [show, setShow] = useState(false)

    const tryShow = () => {
      setShow(true)
    }

  return(
    <div>
      
      {!!data.length ? data.map((data, i) =>{
        return (<CadaProduto title={data.name} key={i} click={() => {deleteProduct(data.idprodutos)}} info={()  => {infoProduct(data.idprodutos)}}/>)
      })
      : (<SemProduto />)}

{/* info={()  => {infoProduct(data.idprodutos)}} */}
      {data.map((data, i) =>{
        return ( <Modal onClose={()=> setShow(false)} show={show} key={i} name={data.name} priority={data.priority} price={data.price} whereToBuy={data.whereToBuy} description={data.description}/>)
      })}
      {/* <Modal onClose={()=> setShow(false)} show={show} /> */}


    </div>
  );
}
