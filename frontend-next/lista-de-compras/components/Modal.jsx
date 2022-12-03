import { useEffect } from "react";
import styles from "../styles/Modal.module.css";
import BotaoCadastro from "./BotaoCadastro";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.propForms}>
      <div className={styles.forms}>
        <form>
          <div>
            <h1> Creme de cabelo </h1>
          </div>
          <div className={styles.share}>
            <h3 htmlFor="priority">Prioridade de compra</h3>
            <div className={styles.box}>
              <p>{props.priority}</p>
            </div>
            <h3 htmlFor="price">Preço do Produto</h3>
            <div className={styles.box}>
              <p>{props.price}</p>
            </div>
          </div>
          <h3 htmlFor="whereToBuy">Onde comprar</h3>
          <div className={styles.box}>
            <p>{props.whereToBuy}</p>
          </div>
          <h3 htmlFor="description">Descrição </h3>
          <div className={styles.box}>
            <p>{props.description}</p>
          </div>
          <BotaoCadastro nome={"Pronto"} />
        </form>
      </div>
    </div>
  );
}
