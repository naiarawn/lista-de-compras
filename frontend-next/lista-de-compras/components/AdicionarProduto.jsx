import styles from '../styles/AdicionarProduto.module.css'
import NovoProduto from '../components/NovoProduto'

export default function AdicionarProduto(){
  return(
    <div>
      <div className={styles.alinha}>
        <h2 className={styles.h2}>Sua lista de compras:</h2>
        <div>
        <NovoProduto />
        </div>
      </div>
    </div>
  )
}