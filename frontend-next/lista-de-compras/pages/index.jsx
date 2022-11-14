import AdicionarProduto from '../components/AdicionarProduto'
import FirstBloco from '../components/FirstBloco'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Header />
      <FirstBloco />
      <AdicionarProduto />
    </div>
  )
}
