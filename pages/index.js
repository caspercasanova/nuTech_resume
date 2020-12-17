// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
import Navbar from '../components/Navbar';
import GlowCorner from '../components/GlowCorner';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <GlowCorner top={true} />
      <EarthJournal />
      <Projects />
      <Education />
      <SkillsCatalog />
      <GlowCorner bottom={true} />
      <Footer />
    </div>
  );
}
