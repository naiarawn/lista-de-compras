import styles from '../styles/BotaoCadastro.module.css'

export default function BotaoCadastro(props){
  return(
    <div className={styles.div}>
      <button className={styles.button} type={props.type ? props.type : 'submit'} onClick={props.click}>{props.nome}</button>
    </div>
  )
}