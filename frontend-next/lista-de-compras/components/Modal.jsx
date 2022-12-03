import { useEffect } from "react"
import styles from '../styles/Modal.module.css'


export default function Modal(props){
    if (!props.show){
      return null
    }

    return(
      <div class="propForms" onClick={props.onClose}>
      <form>
        <div onClick={e => e.stopPropagation()}>
          <label>{props.name}</label>
          <p> </p>
        </div>
        <div>
          <div className={styles.box}>
            <label htmlFor="priority">Prioridade de compra</label>
            <p> </p>     
          </div>
          <div className={styles.box}>
            <label htmlFor="price">Preço do Produto</label>
            <p> </p>  
          </div> 
        </div>
        <div className={styles.box}>
          <label htmlFor="whereToBuy">Onde comprar</label>
          <p> </p>  
        </div> 
        <div>
          <label htmlFor="description">Descrição </label>
          <p> </p>
          </div>
          <button onClick={props.onClose}>Fechar</button>
          </form>
      </div>
    )
  }