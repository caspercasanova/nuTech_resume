import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NavLink from '../ui/NavLink';
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

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
`;

export default function Navigation() {
  return (
    <>
      <NavigationWrapper>
        <Nav>
          <NavLinkContainer>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/about'}>About</NavLink>
            <NavLink href={'/contact'}>Contact</NavLink>
            <NavLink href={'/art'}>Art</NavLink>
            <NavLink href={'/projects'}>Projects</NavLink>
          </NavLinkContainer>
        </Nav>
      </NavigationWrapper>
    </>
  );
}
