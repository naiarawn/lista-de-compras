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
          tryShow(res.data)
        });
    }
    
    const [show, setShow] = useState(false)
    const [modalData, setModalData] = useState({})

    const tryShow = (data) => {
      setShow(true)
      setModalData(data)
    }

  return(
    <div>
      
      {!!data.length ? data.map((data, i) =>{
        return (<CadaProduto title={data.name} key={i} click={() => {deleteProduct(data.idprodutos)}} info={()  => {infoProduct(data.idprodutos)}}/>)
      })
      : (<SemProduto />)}


      <Modal close={()=> setShow(false)} show={show} name={modalData.name} priority={modalData.priority} price={modalData.price} whereToBuy={modalData.whereToBuy} description={modalData.description}/>

    </div>
  );
}