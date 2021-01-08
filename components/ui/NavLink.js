import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
export default function NavLink({ href, children }) {
  return (
    <LinkTag>
      <Link href={href}>
        <StyledBar>{children}</StyledBar>
      </Link>
    </LinkTag>
  );
}

const LinkTag = styled.a`
  position: relative;
  transition: all 300ms ease-in 0s;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 800;
  margin: 0px 0px 7px;
  line-height: 1.7;
  background-color: transparent;
  color: white;
  & :visited,
  :active,
  :focus {
    text-shadow: rgba(246, 73, 167, 0.4) 0px 2px 3px;
  }
  & :hover {
    text-shadow: white;
  }
`;

const StyledBar = styled.span`
  position: relative;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 800;
  height: 100%;
  & :before {
    content: '';
    position: absolute;
    height: 2px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.5s ease 0s;
  }
  & :hover {
    & :before {
      transform-origin: right bottom 0px;
      transform: scaleX(1);
    }
  }
`;
