import type { FC } from 'react'
import { ProjectCard, Section } from '@/components'
import styles from './home.module.css'

const Home: FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <h2 className={styles.hero__title}>
          building thoughtful, <br /> high-quality web systems.
        </h2>
        <p className={styles.hero__description}>
          experiments in architecture, accessibility, motion, and product ux.
        </p>
        <img className={styles.hero__arc} src='/images/arc.png' alt='arc' />
      </section>
      <Section title='explorations' spacing='loose'>
        <div className={styles.projects_grid}>
          <ProjectCard
            title='Stardive'
            description='Cinematic space travel concept centered on storytelling, motion, and modern frontend craft.'
            image='/images/stardive.png'
            state='in progress'
            slug='stardive'
          />
          <ProjectCard
            title='SimpleTasks'
            description='A minimal, opinionated task manager focused on speed, clarity, and low cognitive load.'
            image='/images/simpletasks.png'
            state='in progress'
            slug='simpletasks'
          />
          <ProjectCard
            title='Blink'
            description='Workflow-based feature flag management emphasising safety, iteration, and reversibility.'
            image='/images/blink.png'
            state='in progress'
            slug='blink'
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
      <Section title='contact' bordered={false}>
        <p>
          email: <a href='mailto:pixellateddev@proton.me'>pixellated.dev@proton.me</a>
        </p>
      </Section>
    </>
  )
}

export default Home
