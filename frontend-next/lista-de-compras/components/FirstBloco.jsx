import styles from '../styles/FirstBloco.module.css'

export default function FirstBloco(){
  return(
    <div>
      <div className={styles.conteudo}>
        <div className={styles.leftBloco}>
          {/* <img className = {styles.bola} src="/Bola.svg" alt="" /> */}
          <h1 className={styles.h1}>Organize todas as suas compras online!</h1>
        </div>
        <img src="/DesenhoComprasBolas.svg" alt="Ilustração moça fazendo compras" className={styles.responsive}/>
      </div>
    </div>
  )
}