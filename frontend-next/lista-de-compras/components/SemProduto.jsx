import styles from '../styles/SemProduto.module.css'

export default function SemProduto(){
  return(
    <div>
      <div className={styles.alinha}>
        <img src="/DesenhoListaVazia.svg" alt="" />
        <h3 className={styles.h3}>Você ainda não adicionou nada na sua lista!</h3>
      </div>
    </div>
  )
}