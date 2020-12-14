// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Tickerbar from '../components/Tickerbar';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
import AnalogClocks from '../components/AnalogClocks';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Timer />
      <AnalogClocks />
      <EarthJournal />
      <Tickerbar />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}
