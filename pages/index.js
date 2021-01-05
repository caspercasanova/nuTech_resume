// import Head from 'next/head';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import Education from '../components/Education/Education';
import Projects from '../components/ProjectsView/Projects';
import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import MainContainer from '../components/ui/MainContainer';
import RowSection from '../components/ui/RowSection';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer/Footer';

export default function Home() {
  console.log(`A little riddle for you`);
  return (
    <MainContainer>
      <Navigation />
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
