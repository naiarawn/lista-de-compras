import AdicionarProduto from '../components/AdicionarProduto'
import FirstBloco from '../components/FirstBloco'
import Footer from '../components/Footer'
import Header from '../components/header'
import SemProduto from '../components/SemProduto'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Header />
      <FirstBloco />
      <AdicionarProduto />
      <SemProduto />
      <Footer />
    </div>
  )
}
