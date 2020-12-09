import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/AboutMe'
import EarthJournal from '../components/EarthJournal'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Tickerbar from '../components/Tickerbar'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <AboutMe />
      <EarthJournal />
      <Tickerbar />
      <Education />
      <Projects />

    </div>
  )
}
