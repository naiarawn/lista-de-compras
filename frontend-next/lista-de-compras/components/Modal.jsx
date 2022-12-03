import { useEffect } from "react";
import styles from "../styles/Modal.module.css";
import CadaProduto from "./CadaProduto";
export default function Modal(props) {

<<<<<<< HEAD
  return (
    <div class="propForms">
=======

export default function Modal(props){
    if (!props.show){
      return null
    }

    return(
      <div class="propForms">
>>>>>>> ac92e86e3f622db6ca2d1d0ceaf2a565d1ea16bb
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
<<<<<<< HEAD
        </div>
      </form>
    </div>
  );
}
=======
          </div>
          <button>Fechar</button>
          </form>
      </div>
    )
  }
>>>>>>> ac92e86e3f622db6ca2d1d0ceaf2a565d1ea16bb
