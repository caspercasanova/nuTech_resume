// import Head from 'next/head';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import GlowCorner from '../components/ui/GlowCorner';
import MainContainer from '../components/ui/MainContainer';
import RowSection from '../components/ui/RowSection';

export default function Home() {
  return (
    <MainContainer>
      <EarthJournal />
      <Projects />
      <RowSection>
        <Education />
        <BlogPosts />
      </RowSection>
      <SkillsCatalog />
      <Footer />
    </MainContainer>
  );
}
