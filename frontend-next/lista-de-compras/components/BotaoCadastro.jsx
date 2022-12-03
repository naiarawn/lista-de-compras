import styles from '../styles/BotaoCadastro.module.css'

export default function BotaoCadastro(props){
  return(
    <div className={styles.div}>
      <button className={styles.button} type='submit'>{props.nome}</button>
    </div>
  )
}