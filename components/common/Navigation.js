import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
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
            <Link href="/">
              <button>Home</button>
            </Link>
            <Link href="/about">
              <button>About</button>
            </Link>
            <Link href="/contact">
              <button>Contact</button>
            </Link>
            <Link href={'/art'}>
              <button>Art</button>
            </Link>
            <button
              onMouseOver={() => set(true)}
              onMouseOut={() => set(false)}>
              Projects
            </button>
          </NavButtonContainer>
        </Nav>
        {hovered && (
          <SubLinksNav hidden={!hovered}>
            <Link href={'/project/projectX'}>
              <button>Project X</button>
            </Link>
            <Link href={'/project/projecty'}>
              <button>Project Y</button>
            </Link>
            <Link href={'/project/projectZ'}>
              <button>Project Z</button>
            </Link>
          </SubLinksNav>
        )}
      </NavigationWrapper>
    </>
  );
}
