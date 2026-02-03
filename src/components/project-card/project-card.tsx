import type { FC } from 'react'
import styles from './project-card.module.css'

interface Props {
  title: string
  description: string
  image: string
  state: 'in progress' | 'completed'
}

const ProjectCard: FC<Props> = ({ title, description, image, state }) => {
  return (
    <div className={styles.project_card}>
      <img src={image} alt={title} className={styles.project_card__image} />
      <h3 className={styles.project_card__title}>{title}</h3>
      <p className={styles.project_card__description}>{description}</p>
      <span className={styles.project_card__state}>{state}</span>
    </div>
  )
}

export default ProjectCard
