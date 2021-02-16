import React from 'react';
import styled from 'styled-components';

export default function RobinhoodNav({
  pages,
  setPage,
  currentlyActive,
}) {
  console.log(pages);
  return (
    <AboutViewNav>
      {pages.map((page, index) => (
        <NavButton
          key={index}
          active={
            page.name == currentlyActive ? true : false
          }
          onClick={() => setPage(page.name)}>
          {page.name}
        </NavButton>
      ))}
    </AboutViewNav>
  );
}

const NavButton = styled.button`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: none;
  text-align: left;
  padding-bottom: 10px;
  margin-right: 10px;
  border-bottom: ${({ active }) =>
    active ? '2px solid #426ba7' : 'none'};
  color: ${({ active }) =>
    active ? '2px solid #426ba7' : 'inherit'};
  &:hover {
    border-bottom: 2px solid #426ba7;
    color: #426ba7;
  }
`;

const AboutViewNav = styled.nav`
  border-bottom: 1px solid #eaeaea;
`;
