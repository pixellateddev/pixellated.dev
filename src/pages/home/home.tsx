import type { FC } from 'react'
import { ProjectCard, Section } from '@/components'
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
        <img className={styles.hero__arc} src='/images/arc.png' alt='arc' />
      </section>
      <Section title='explorations'>
        <div className={styles.projects_grid}>
          <ProjectCard
            title='Stardive'
            description='Cinematic space travel concept centered on storylelling. motion, and modern frontend craft.'
            image='/images/stardive.png'
            state='in progress'
          />
          <ProjectCard
            title='SimpleTasks'
            description='A mimimal, opinionated task manager focused on speed, clarity, and low cogintive load.'
            image='/images/simpletasks.png'
            state='in progress'
          />
          <ProjectCard
            title='Blink'
            description='Workflow-based feature flag management emphasising safety, iteration, and ercible'
            image='/images/blink.png'
            state='in progress'
          />
        </div>
      </Section>
      <Section title='background'>
        <ul className={styles.background}>
          <li className={styles.background__primary}>
            UI Engineer at <span className={styles.background__company}>Apple</span>
            <ul>
              <li className={styles.background__secondary}>previously at Factset and Capgemini</li>
            </ul>
          </li>
        </ul>
      </Section>
      <Section title='contact'>
        <p>
          email: <a href='mailto:pixellateddev@proton.me'>pixellated.dev@proton.me</a>
        </p>
      </Section>
    </main>
  )
}

export default Home
