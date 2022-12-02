import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.image}>
        <Link href= '/'>
          <img src="/LogoHeader.svg" alt="I want it, I got it" />
          </Link>
        </div>
      </header>
    </>
  )
}