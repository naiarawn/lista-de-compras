import styles from '../styles/BotaoCadastro.module.css'

export default function BotaoCadastro(){
  return(
    <div className={styles.div}>
      <button className={styles.button} type='submit'>Adicionar</button>
    </div>
  )
}