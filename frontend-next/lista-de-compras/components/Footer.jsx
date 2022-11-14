import styles from '../styles/Footer.module.css'

export default function Footer(){
  return(
    <div>
      <footer className={styles.footer}>
        <div className={styles.image}>
          <img src="/LogoFooter.svg" alt="I want it, I got it" />
        </div>
      </footer>
      <div className={styles.love}>
        <small className={styles.small}>Feito pela InfoJr UFBA com Figma, React e muito</small>
        <img src="/Heart.svg" alt="" />
      </div>
    </div>
  )
}