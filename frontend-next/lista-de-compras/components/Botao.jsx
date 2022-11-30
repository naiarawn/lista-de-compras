import styles from '../styles/Botao.module.css'

export default function Botao(props){
  return(
    <div>
      <button className={styles.button}>{props.value} 
      <img src={props.icon} /></button>
    </div>
  )
}