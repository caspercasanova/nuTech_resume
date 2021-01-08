import React, { useState } from 'react';
import Journal from './Journal';
import Socials from '../common/Socials';
import GlobeCanvas from './3d/GlobeCanvas';
import JournalEntries from './JournalEntries';
import styled from 'styled-components';

const Me = styled.section`
  background-color: #111216;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  & h1 {
    font-size: 40px;
  }
`;

const EarthJournalContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 600px;
  overflow: hidden;
  border-radius: 4px;
`;

/* 
<SideBar>
          <Journal
            journalEntry={JournalEntries[idx]}
            idx={idx}
          />
        </SideBar> */

export default function EarthJournal() {
  const [idx, setIdx] = useState(0);

  return (
    <section>
      <EarthJournalContainer>
        <GlobeCanvas setIdx={setIdx} idx={idx} />
      </EarthJournalContainer>
    </section>
  );
}
