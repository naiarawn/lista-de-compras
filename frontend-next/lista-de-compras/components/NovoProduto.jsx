import styles from '../styles/NovoProduto.module.css'

export default function NovoProduto(){
  return(
    <div>
      <button className={styles.button}>Novo Produto
      <img src="/Mais.svg" alt="" /></button>
    </div>
  )
}