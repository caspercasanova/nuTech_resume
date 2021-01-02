import React from 'react';
import Socials from '../common/Socials';
import styled from 'styled-components';
import NetworkSVG from '../../assets/Svgs/NetworkSVG';

const LetsWorkTogetherCard = styled.div`
  border: 1px solid #426ba7;
  padding: 10px 14px;
  border-radius: 4px;
  max-width: 50ch;
  transition: transform 0.1s ease-in;
  &:hover {
    box-shadow: 0 1px 3px 1px #426ba7;
  }
`;

const LetsWorkHeader = styled.div`
  display: flex;
  align-items: center;
`;

export default function LetsWorkTogether() {
  return (
    <LetsWorkTogetherCard>
      <LetsWorkHeader>
        <NetworkSVG />
        <h4>Lets Work Together!</h4>
      </LetsWorkHeader>
      <hr />
      <div>
        I Am Always Willing To Chat With Nerd-Like Folk.
        Lets Talk About The Future
      </div>
      <div>Reach Out!</div>
      <Socials />
    </LetsWorkTogetherCard>
  );
}
