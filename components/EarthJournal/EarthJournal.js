import React, { useState } from 'react';
import Journal from './Journal';
import Socials from '../Socials';
import GlobeCanvas from './GlobeCanvas';
import JournalEntries from './JournalEntries';
import styled from 'styled-components';

const Me = styled.div`
  background-color: #111216;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  & h1 {
    font-size: 40px;
  }
`;

const EarthJournalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  /* border: 1px solid #131a22; */
  // background-color: #131a22;
  overflow: hidden;
  border-radius: 4px;
`;

const SideBar = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: 10px;
`;

export default function EarthJournal() {
  const [idx, setIdx] = useState(0);

  return (
    <EarthJournalContainer>
      <GlobeCanvas setIdx={setIdx} idx={idx} />
      <SideBar>
        <Me>
          <div>
            <div>SOFTWARE ENGINEER / ADVENTURER</div>
            <h1>Nicholas Lopez</h1>
            <Socials />
            <i>
              "I hold true to an Engineering Principle in
              where the best software manifests when
              developers’ tools and technologies are
              Democratized so walks of all life are
              empowered by their use. "
            </i>
          </div>
        </Me>
        <Journal
          journalEntry={JournalEntries[idx]}
          idx={idx}
        />
      </SideBar>
    </EarthJournalContainer>
  );
}
