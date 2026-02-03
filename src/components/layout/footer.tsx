import type { FC } from 'react'
import styles from './layout.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__content}>
        pixellated.dev - experiments, notes and systems i care about
      </p>
    </footer>
  )
}

export default Footer
