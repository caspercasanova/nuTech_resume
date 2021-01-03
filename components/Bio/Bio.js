import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
const BioWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Biography = styled.section`
  & p {
    max-width: 60ch;
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: 1px;
  }
`;
export default function Bio() {
  return (
    <BioWrapper>
      <Image
        src={'/profile_pic.png'}
        alt={'Profile Pic'}
        width={400}
        height={400}
      />
      <Header>
        <Image
          src={'/marker.png'}
          alt={'Custom Icon'}
          width={50}
          height={50}
        />
        <h3>Bio</h3>
      </Header>
      <Biography>
        <p>Hey there, Im Nicholas.</p>
        <p>
          I am interested in many domains. Obviously
          Software, but I think my parents passed to me an
          analytical mind. I like numbers, lines and love
          Infographic / Schematics. I enjoy the mental
          exercise of breaking things down to understand
          them and will always be researching Technologies,
          Economics, Health, Sports, Cars, Aviation, Gaming,
          and Writing.
        </p>
        <p>
          I'm a big House / Garage head and dig for Chopped
          and Screwed (when done properly) tracks. I also
          was / have been into Vaporwave when it was wierd.
          I just like cool and different sounds and all
          around good music. I made a{' '}
          <a
            href={
              'https://github.com/caspercasanova/slave1'
            }>
            WebBot
          </a>{' '}
          that posts to Twitter when I like a new song on
          SoundCloud.{' '}
        </p>
        <p>
          A non software / engineering book I am reading
          right now is{' '}
          <a href="https://jackryan.fandom.com/wiki/Shadow_of_the_Dragon">
            Tom Clancy: Shadow of the Dragon
          </a>
          . It's ok.... I want to read
          <a
            href={
              'https://en.wikipedia.org/wiki/The_Day_of_the_Jackal'
            }>
            The Day of the Jackal{' '}
          </a>{' '}
          next.
        </p>
        <p>Currently</p>
        <p>
          I am currently Job Searching whilst working on a
          couple projects. Project-X, Project-Y, Project-Z
          (naming does not have to be hard). I am also
          enrolled in a couple courses in Mathematics and
          Computer Science in effort to complete my
          Bachelors Degree.
        </p>
        <p>Previously</p>
        <p>
          In May of 2020 I completed the Hack Reactor
          Software Engineering Immersive, an amazing
          experience that accelerated my growth as an
          engineer. I touched all facets of web develoment
          and software engineering. A truly Fullstack
          Experience that I would recomend to the driven.
        </p>
        <p>
          I worked as a Doctor's Assistant and Floor Manager
          at South Bay Pain and Wellness, a Chiropractic
          Office that would see no less than 40 patients a
          day. An heart opening experience to say the least,
          I learned to empathetically communicate to
          complete strangers who were in pain. Medical
          Professionalism is a step beyond any other, and
          the lessons I learned at that job I will carry for
          the rest of my life.
        </p>
        <p>
          I have always been an active and sporty person, I
          even competed collegiately as a water polo
          athlete. In 2012 I accomplished a dream and became
          a State Champion. Undefeated 26-0.
        </p>
      </Biography>
      <hr></hr>
      <div>
        <p>
          You can Find more details about me on LinkedIn,
          Github or take a look at my CV.
        </p>
      </div>
    </BioWrapper>
  );
}
