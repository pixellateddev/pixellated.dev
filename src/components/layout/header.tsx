import type { FC } from 'react'
import styles from './layout.module.css'

const Header: FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.brand}>pixellated.dev</h1>

        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href='/projects' className={styles.nav__link}>
                projects
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href='/notes' className={styles.nav__link}>
                notes
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href='/about' className={styles.nav__link}>
                about
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
