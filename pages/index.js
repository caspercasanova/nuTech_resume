// import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
import Navbar from '../components/Navbar';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import styled from 'styled-components';

const RowCol = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <EarthJournal />
      <Projects />
      <RowCol>
        <Education />
        <BlogPosts />
      </RowCol>
      <SkillsCatalog />
      <Footer />
    </div>
  );
}
