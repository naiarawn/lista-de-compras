import styles from '../../styles/Inicio.module.css'
import Botao from '../Botao'

export default function Inicio(){
  return(
    <div>
      <div className={styles.alinha}>
      <h1 className={styles.h1}>Novo Produto</h1>
      <Botao value = "Pagina Inicial" icon ="/HomeIcon.svg"/>
      </div>
    </div>
  )
}