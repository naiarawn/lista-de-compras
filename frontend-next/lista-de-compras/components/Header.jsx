import styles from '../styles/Header.module.css'

export default function Header(){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <img src="/LogoHeader.svg" alt="I want it, I got it" />
        </div>
      </header>
    </>
  )
}