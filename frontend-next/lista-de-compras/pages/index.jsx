import AdicionarProduto from '../components/AdicionarProduto'
import FirstBloco from '../components/FirstBloco'
import Footer from '../components/Footer'
import Header from '../components/header'
import ListaProdutos from '../components/ListaProdutos'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Header />
      <FirstBloco />
      <AdicionarProduto />
      <ListaProdutos />
      <Footer />
    </div>
  )
}
