import styles from '../styles/AdicionarProduto.module.css'
import Botao from './Botao'
import Link from 'next/link'

export default function AdicionarProduto(){
  return(
    <div>
      <div className={styles.alinha}>
        <h2 className={styles.h2}>Sua lista de compras:</h2>
        <div>
        <Link href="/cadastro">
        <Botao value = "Novo Produto" icon ="/Mais.svg"/>
        </Link>
        </div>
      </div>
    </div>
  )
}