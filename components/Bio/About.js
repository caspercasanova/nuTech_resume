import React from 'react';

import Image from 'next/image';
export default function Bio() {
  return (
    <section>
      <header>
        <Image src={'/marker'} width={50} height={50} />
        <h3>Bio</h3>
      </header>
      <div>
        <p>
          Hey there, my name is Nicholas Lopez and I am a
          software engineer!
        </p>
        <p>
          I, like many others, did not with much of computer
          background other than with gaming. I studied
          Biology, though unfortunately, was un-able to
          complete my studies. I have always a driven
          individual in light of not completing school, I
          set my sights on some Physical Therapy
          Certifactions.{' '}
        </p>
        <p>
          I have always been an active and sporty person, I
          even completed collegiately in water polo and won
          a state championship. After aquiring some of my
          certifications, I began applying jobs.
        </p>
        <p>
          I landed a Chiropractic Assistant role and found
          myself working with 50 plus patients a day. I was
          a very eye opening experience and when you deal
          with people who are in pain everyday, your
          perspective and appraoch on in treating people
          changes for the better. Medical Professionalism is
          a step ahead of any other kind, and there are many
          lessons I learned when working in the medical
          office.
        </p>
        <p>
          I eventually began my self study of programmign
          with the help of a friend already versed in
          multiple languages. His guidance and help allowed
          me to pick up concepts faster and open my mind to
          things down the road.
        </p>
        <p>
          Eventually I decided to attend Hack Reactor in
          effort to further my expertise and eventually
          apply for a job as a developer.
        </p>
        <p>
          I have since graduated and have been applying to
          jobs and building projects since. I have a number
          of projects you should check out and please feel
          free to drop me an email or message on linkedIn.
        </p>
      </div>
    </section>
  );
}
