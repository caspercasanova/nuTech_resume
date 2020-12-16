// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import AnalogClocks from '../components/AnalogClocks/AnalogClocks';
import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
import Tickerbar from '../components/Tickerbar';
import Timer from '../components/Timer';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <EarthJournal />
      <Projects />
      <Education />
      <SkillsCatalog />
      <Footer />
      <Tickerbar />
      <Timer />
      <AnalogClocks />
    </div>
  );
}
