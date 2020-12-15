import React from 'react';
import styled from 'styled-components';
import TypedMessage from '../TypedMessage';

const JournalContainer = styled.div`
  border: 1px solid #131a22;
`;

export default function Journal({ journalEntry }) {
  const { location, text } = journalEntry;
  return (
    <div>
      <div>Entry ID: {Math.random().toFixed(3)}</div>
      <div>{text}</div>
      <div>{location}</div>
    </div>
  );
}
