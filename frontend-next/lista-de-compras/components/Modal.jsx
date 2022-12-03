import { useEffect } from "react"
import styles from '../styles/Modal.module.css'


export default function Modal(props){
    if (!props.show){
      return null
    }

    return(
      <div class="propForms">
      <form>
        <div>
          <label>PROPS</label>
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
          <button>Fechar</button>
          </form>
      </div>
    )
  }