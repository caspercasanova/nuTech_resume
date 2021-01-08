import React from 'react';
import styled from 'styled-components';
import NavLink from '../ui/NavLink';

const NavigationWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex: 1;
`;

const NavLinkContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-self: center;
  position: fixed;
  top: 50%;
`;

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavLinkContainer>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About</NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
        <NavLink href={'/art'}>Art</NavLink>
        <NavLink href={'/projects'}>Projects</NavLink>
      </NavLinkContainer>
    </NavigationWrapper>
  );
}
