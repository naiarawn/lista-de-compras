import Inicio from '../components/Cadastro/Inicio'
import Footer from '../components/Footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Cadastro() {
  return (
    <div className={styles.container}>
      <Header />
      <Inicio />
      <Footer />
    </div>
  )
}
