import styles from '../../styles/Inicio.module.css'
import Botao from '../Botao'
import Link from 'next/link'
export default function Inicio(){
  return(
    <div className={styles.container}>
      <div className={styles.alinha}>
        <h1 className={styles.h1}>Novo Produto</h1>
      </div>
      <div className={styles.belinha}>
        <Link href= '/'>
        <Botao value = "Pagina Inicial" icon ="/HomeIcon.svg"/>
        </Link>
      </div>
    </div>
  )
}