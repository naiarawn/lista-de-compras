import styles from '../styles/CadaProduto.module.css'

export default function CadaProduto(props){
  return(
    <div>
      <div className={styles.fundo}>
        <label className={styles.text}>
          <input type="checkbox" />
          {props.title}
        </label>
        <div className={styles.icons}>
          <img src="/Eyes.svg" alt="" />
          <img src="/Trash.svg" alt="" />
        </div>
      </div>
    </div>
  )
}