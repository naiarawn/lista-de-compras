import styles from '../styles/Formulario.module.css'

export default function Formulario(){
  return(
  <div className={styles.container}>
    <form action="" className={styles.container}>
      <div className={styles.inputBox}>
        <label htmlFor="name">Nome do Produto </label>
        <input type="text" id='name' name='name'/>
      </div>
      <div className={styles.agrupa}>
        <div className={styles.inputBox}>
          <label htmlFor="priority">Prioridade de compra</label>
          <input type="text" id='priority' name='priority'/>     
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="price">Preço do Produto</label>
          <input type="number" id='price' name='price'/>  
        </div> 
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="whereToBuy">Onde comprar</label>
        <input type="text" id='whereToBuy' name='whereToBuy'/>  
      </div> 
      <div className={styles.inputBox}>
        <label htmlFor="description">Descrição </label>
        <input type="text" id='description'  name ='description'/>
      </div>    
    </form>
  </div>  
  )
}