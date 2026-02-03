import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import { type FC, useEffect, useRef, useState } from 'react'
import styles from './layout.module.css'

const Header: FC = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const isNav = navRef.current?.contains(target)
      const isToggle = toggleRef.current?.contains(target)

      if (!isNav && !isToggle) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.brand}>
          <Link to='/'>pixellated.dev</Link>
        </h1>
        <nav ref={navRef} className={clsx(styles.nav, { [styles.nav__open]: open })}>
          <Link to='/projects' onClick={() => setOpen(false)} className={styles.nav__link}>
            projects
          </Link>

          <Link to='/notes' onClick={() => setOpen(false)} className={styles.nav__link}>
            notes
          </Link>

          <Link to='/about' onClick={() => setOpen(false)} className={styles.nav__link}>
            about
          </Link>
        </nav>
        <button
          ref={toggleRef}
          type='button'
          className={styles.menu_toggle}
          aria-expanded={open}
          aria-label='Toggle menu'
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
