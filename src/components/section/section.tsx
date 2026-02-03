import clsx from 'clsx'
import type { FC, ReactNode } from 'react'
import styles from './section.module.css'

interface Props {
  title: string
  children: ReactNode
  spacing?: 'tight' | 'loose'
  bordered?: boolean
}

const Section: FC<Props> = ({ children, title, spacing = 'tight', bordered = true }) => {
  return (
    <section
      className={clsx(
        styles.section,
        styles[`section__${spacing}`],
        styles[`section__${bordered ? 'bordered' : 'unbordered'}`]
      )}
    >
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles.section__content}>{children}</div>
    </section>
  )
}

export default Section
