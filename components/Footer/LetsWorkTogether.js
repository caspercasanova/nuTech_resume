import React from 'react';
import Socials from '../Socials';
import styled from 'styled-components';
import NetworkSVG from '../../assets/Svgs/NetworkSVG';

const LetsWorkTogetherCard = styled.div`
  border: 1px solid cyan;
  padding: 8px 14px;
  border-radius: 4px;
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
