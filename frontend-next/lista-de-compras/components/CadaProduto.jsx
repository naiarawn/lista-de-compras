import styles from '../styles/CadaProduto.module.css'

export default function CadaProduto(props){
  return(
    <div>
      <div className={styles.fundo}>
        <label className={styles.text}>
          <input type="checkbox" className={styles.checkBox}/>
          {props.title}
        </label>
        <div className={styles.icons}>
          <img src="/Eyes.svg" alt="" />
          <img onClick={props.click} src="/Trash.svg" alt="" className={styles.trash}/>
        </div>
      </div>
    </div>
  )
}