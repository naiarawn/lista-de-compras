import styles from '../styles/CadaProduto.module.css'

export default function CadaProduto(){
  return(
    <div>
      <div className={styles.fundo}>
        <label className={styles.text}>
          <input type="checkbox" />
          My Value
        </label>
        <div className={styles.icons}>
          <img src="/Eyes.svg" alt="" />
          <img src="/Trash.svg" alt="" />
        </div>
      </div>
    </div>
  )
}