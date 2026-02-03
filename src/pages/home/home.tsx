import type { FC } from 'react'
import { ProjectCard } from '@/components'
import styles from './home.module.css'

const Home: FC = () => {
  return (
    <main>
      <section className={styles.hero}>
        <h2 className={styles.hero__title}>
          building thoughtful, <br /> high-quality web systems.
        </h2>
        <p className={styles.hero__description}>
          experiments in architecture, accessibility, motion, and product ux.
        </p>
      </section>
      <section className={styles.explorations}>
        <h2>explorations</h2>
        <div className={styles.projects_grid}>
          <ProjectCard
            title='Stardive'
            description='Cinematic space travel concept centered on storylelling. motion, and modern frontend craft.'
            image='https://placehold.co/400x200'
            state='in progress'
          />
          <ProjectCard
            title='SimpleTasks'
            description='A mimimal, opinionated task manager focused on speed, clarity, and low cogintive load.'
            image='https://placehold.co/400x200'
            state='completed'
          />
          <ProjectCard
            title='Blink'
            description='Workflow-based feature flag management emphasising safety, iteration, and ercible'
            image='https://placehold.co/400x200'
            state='in progress'
          />
        </div>
      </section>
      <section>
        <h2>background</h2>
        <ul>
          <li>
            UI Engineer at Apple
            <ul>
              <li>previously at Factset and Capgemini</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>contact</h2>
        <p>
          email: <a href='mailto:pixellateddev@proton.me'>pixellated.dev@proton.me</a>
        </p>
      </section>
    </main>
  )
}

export default Home
