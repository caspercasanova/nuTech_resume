import React from 'react';
import styled from 'styled-components';

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
