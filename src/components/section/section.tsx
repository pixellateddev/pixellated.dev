import type { FC, ReactNode } from 'react'

import styles from './section.module.css'

interface Props {
  title: string
  children: ReactNode
}

const Section: FC<Props> = ({ children, title }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles.section__content}>{children}</div>
    </section>
  )
}

export default Section
