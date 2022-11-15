import styles from '../styles/AdicionarProduto.module.css'
import Botao from './Botao'

export default function AdicionarProduto(){
  return(
    <div>
      <div className={styles.alinha}>
        <h2 className={styles.h2}>Sua lista de compras:</h2>
        <div>
        <Botao value = "Novo Produto" icon ="/Mais.svg"/>
        </div>
      </div>
    </div>
  )
}