import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import styles from './project-card.module.css'

interface Props {
  title: string
  description: string
  image: string
  state: 'in progress' | 'completed'
  slug: string
}

const ProjectCard: FC<Props> = ({ title, description, image, state, slug }) => {
  return (
    <Link to='/projects/$slug' params={{ slug }} className={styles.project_card}>
      <img src={image} alt={title} className={styles.project_card__image} />
      <h3 className={styles.project_card__title}>{title}</h3>
      <p className={styles.project_card__description}>{description}</p>
      <span className={styles.project_card__state}>{state}</span>
    </Link>
  )
}

export default ProjectCard
