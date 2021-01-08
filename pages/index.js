// import Head from 'next/head';
import EarthJournal from '../components/EarthJournal/EarthJournal';
import MainContainer from '../components/common/MainContainer';

// import Education from '../components/Education/Education';
// import Projects from '../components/ProjectsView/Projects';
// import SkillsCatalog from '../components/SkillsCatalog/SkillsCatalog';
// import BlogPosts from '../components/BlogPosts/BlogPosts';
// import RowSection from '../components/ui/RowSection';
/* 
<Projects />
        <RowSection>
          <Education />
          <BlogPosts />
        </RowSection>
        <SkillsCatalog />
*/

export default function Home() {
  console.log(`A little riddle for you`);
  return (
    <MainContainer>
      <EarthJournal />
    </MainContainer>
  );
}
