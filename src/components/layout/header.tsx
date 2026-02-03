import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import styles from './layout.module.css'

const Header: FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.brand}>
          <Link to='/'>pixellated.dev</Link>
        </h1>

        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to='/projects' className={styles.nav__link}>
                projects
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to='/notes' className={styles.nav__link}>
                notes
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to='/about' className={styles.nav__link}>
                about
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
