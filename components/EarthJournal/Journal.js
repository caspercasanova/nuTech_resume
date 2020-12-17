import React from 'react';
import styled from 'styled-components';

const JournalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding-left: 10px;
  overflow-y: scroll;
`;

export default function Journal({ journalEntry }) {
  const { location, text } = journalEntry;
  return (
    <JournalContainer>
      <div>Entry ID: {Math.random().toFixed(3)}</div>
      <div>{location}</div>
      {text.split('. ').map((sentance, index) => (
        <h6 key={sentance + index}>{sentance}</h6>
      ))}
    </JournalContainer>
  );
}
