import React from 'react';
import styled from 'styled-components';

const ComingSoonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 10px;
  opacity: 0.9;
  top: 0;
  border: 1px solid gray;
  box-shadow: 0px 0px 4px 4px gray;
`;
const Message = styled.div`
  max-width: 60ch;
`;

export default function ComingSoon() {
  return (
    <ComingSoonWrapper>
      <Message>
        <p>
          I apologize, but due to my current workload at
          school and ect, I am unable to provide this
          information. Please Excuse me and I promise to
          update this soon. :D
        </p>
      </Message>
    </ComingSoonWrapper>
  );
}
