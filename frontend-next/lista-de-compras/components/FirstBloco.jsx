import styles from '../styles/FirstBloco.module.css'

export default function FirstBloco(){
  return(
    <div>
      <div className={styles.conteudo}>
        <h1 className={styles.h1}>Organize todas as suas compras online!</h1>
        <img src="/DesenhoCompras.svg" alt="Ilustração moça fazendo compras" />
      </div>
    </div>
  )
}