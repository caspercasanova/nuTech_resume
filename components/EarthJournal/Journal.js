import React from 'react';
import styled from 'styled-components';
import TypedMessage from '../TypedMessage';

const JournalContainer = styled.div`
  max-height: 550px;
  width: 100%;
  border-radius: 4px;
  overflow-y: scroll;
  padding-left: 10px;
  border-left: 3px solid #111216;
  box-shadow: 10px 0 5px 2px #111216;
  z-index: 6000;
`;

const JournalBody = styled.div``;

export default function Journal({ journalEntry }) {
  const { location, text } = journalEntry;
  return (
    <JournalContainer>
      <JournalBody>
        <div>Entry ID: {Math.random().toFixed(3)}</div>
        <div>{location}</div>
        {text.split('. ').map((sentance, index) => (
          <p key={sentance + index}>{sentance}</p>
        ))}
      </JournalBody>
    </JournalContainer>
  );
}
