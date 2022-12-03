import styles from '../styles/CadaProduto.module.css'
import Modal from './Modal'

export default function CadaProduto(props){
  return(
    <div>
      <div className={styles.fundo}>
        {/* <label className={styles.text}>
          <input type="checkbox" className={styles.checkBox}/>
          {props.title}
        </label> */}

        <label className={styles.text}>
          <input type="checkbox" className={styles.checkBox}/>
          {props.title}
        </label>

        <div className={styles.icons}>
          <img onClick={props.info} id="btnModal" class="btn-close-modal" src="/Eyes.svg" alt="" className={styles.eyes}/>
          <img onClick={props.click} src="/Trash.svg" alt="" className={styles.trash}/>
        </div>
      </div>
    </div>
  )
}