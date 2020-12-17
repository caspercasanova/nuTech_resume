import React from 'react';
import TypedMessage from './TypedMessage';
import styled from 'styled-components';
import ReachMe from './ReachMe';

const HeroLander = styled.div`
  background-color: #111216;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & h1 {
    font-size: 40px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const PersonalPhilosphy = styled.div`
  background-color: #111216;
  border-radius: 4px;
  width: 40ch;
  padding: 4px 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <PersonalPhilosphy>
        <p>
          <i>
            "My I hold onto an Engineering Principle that
            the best software manifests when engineers
            repackage developers’ tools and technologies so
            walks of all life are empowered through their
            use. "
          </i>
        </p>
      </PersonalPhilosphy>
    </HeaderContainer>
  );
}
