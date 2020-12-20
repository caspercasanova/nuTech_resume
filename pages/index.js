// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
import Navbar from '../components/Navbar';
import BlogPosts from '../components/BlogPosts/BlogPosts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <EarthJournal />
      <Projects />
      <Education />
      <SkillsCatalog />
      <BlogPosts />
      <Footer />
    </div>
  );
}
