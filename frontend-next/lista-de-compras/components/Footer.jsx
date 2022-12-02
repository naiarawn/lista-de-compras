import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
  return(
    <div>
      <footer className={styles.footer}>
        <div className={styles.image}>
          <Link href= '/'>
          <img src="/LogoFooter.svg" alt="I want it, I got it" />
          </Link>
        </div>
      </footer>
      <div className={styles.love}>
        <small className={styles.small}>Feito pela InfoJr UFBA com Figma, React e muito</small>
        <img src="/Heart.svg" alt="" />
      </div>
    </div>
  )
}