import React, { useState } from 'react';
import styled from 'styled-components';
import link from 'next/link';
const NavigationWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const SubLinksNav = styled.div`
  display: ${({ hidden }) =>
    hidden == true ? 'none' : 'flex'};
  z-index: 100000;
  width: 100%;
  position: absolute;
  background: white;
  padding: 20px;
  min-height: 100px;
`;

export default function Navigation() {
  const [hovered, set] = useState(false);
  return (
    <>
      <NavigationWrapper>
        <Nav>
          <NavButtonContainer>
            <button>About</button>
            <button>Contact</button>
            <button
              onMouseOver={() => set(true)}
              onMouseOut={() => set(false)}>
              Projects
            </button>
            <button>Art</button>
          </NavButtonContainer>
        </Nav>
        {hovered && (
          <SubLinksNav hidden={!hovered}>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
          </SubLinksNav>
        )}
      </NavigationWrapper>
    </>
  );
}
