import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgb(66, 149, 128);
`;
const Sidebar = styled.div`
  display: flex;
`;

const Navbutton = styled.div`
  border: none;
  background: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-variant-caps: small-caps;
  transform: scale(1);
  transition: transform 0.1s ease-in;
  transform: scale(1.2);
  margin-left: 10px;
  margin-right: 10px;

  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    background: #111216;
    color: rgb(66, 149, 128);
  }
  & .active {
    border-bottom: 2px solid cyan;
    color: rgb(66, 149, 128);
  }
`;

const pages = ['art'];
export default function Navbar() {
  return (
    <NavContainer>
      <Navbutton>
        <Link href="/">Nicholas Lopez</Link>
      </Navbutton>

      <Sidebar>
        {pages.map((link, i) => (
          <Navbutton key={i}>
            <Link href={`/${link}`}>{link}</Link>
          </Navbutton>
        ))}
      </Sidebar>
    </NavContainer>
  );
}
