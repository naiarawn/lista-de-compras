import axios from 'axios';
import { useState } from 'react'
import styles from '../styles/Formulario.module.css'

export default function Formulario(){

  const [dataForm, setDataForm] = useState({
    name: '',
    priority: '',
    price: '',
    whereToBuy: '',
    description: ''
  })
  
  const onChangeInput = e => setDataForm({...dataForm, [e.target.name]: e.target.value});

  const sendData = async e => {
    e.preventDefault()
    console.log(dataForm)

    // try{
    //   await fetch("http://localhost:3333/produtos/insert", {
    //     method: 'POST',
    //     body: JSON.stringify(dataForm),
    //   })
    // } catch(err){
    //   console.log("Tente novamente")
    // }
  }

  // const sendData = data => axios.post("http://localhost:3333/produtos/insert", data)
  // .then(() =>{
  //   console.log("foi")
  // })
  // .catch(() =>{
  //   console.log("erro")
  // })

  return(
  <div className={styles.container}>
    <form onSubmit={sendData} action="" className={styles.container}>
      <div className={styles.inputBox}>
        <label htmlFor="name">Nome do Produto </label>
        <input type="text" id='name' name='name'onChange={onChangeInput} value={dataForm.name}/>
      </div>
      <div className={styles.agrupa}>
        <div className={styles.inputBox}>
          <label htmlFor="priority">Prioridade de compra</label>
          <input type="text" id='priority' name='priority'onChange={onChangeInput} value={dataForm.priority}/>     
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="price">Preço do Produto</label>
          <input type="number" id='price' name='price'onChange={onChangeInput} value={dataForm.price}/>  
        </div> 
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="whereToBuy">Onde comprar</label>
        <input type="text" id='whereToBuy' name='whereToBuy'onChange={onChangeInput} value={dataForm.whereToBuy}/>  
      </div> 
      <div className={styles.inputBox}>
        <label htmlFor="description">Descrição </label>
        <input type="text" id='description'  name ='description'onChange={onChangeInput} value={dataForm.description}/>
      </div>
    <button type='submit'>Enviar</button>
    </form>
  </div>  
  )
}