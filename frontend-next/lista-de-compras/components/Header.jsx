import styles from '../styles/Header.module.css'

export default function Header(){
  return(
    <div className={styles.header}>
      <div className={styles.image}>
        <img src="../public/LogoHeader.svg" alt="" />
      </div>
    </div>
  )
}