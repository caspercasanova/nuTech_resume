import React from 'react';
import styled from 'styled-components';
import ArtIcon from '../../assets/Svgs/ArtIcon';
import Link from 'next/link';

const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const CheckOutHeader = styled.div`
  display: flex;
  align-items: center;
`;
const ArtPageButton = styled.button`
  border: 1px solid rgb(66, 149, 128);
  color: rgb(66, 149, 128);
  background: transparent;
  transition: transform 0.1s ease-in;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
    color: #426ba7;
    border: 1px solid #426ba7;
    box-shadow: 0 1px 3px 1px #426ba7;
  }
`;

export default function CheckOutMyArt() {
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <ArtIcon />
        <h3>Check Out My "Art" Page</h3>
      </CheckOutHeader>
      <ArtPageButton>
        <Link href="/art">
          <div>I Am Not An Artist</div>
        </Link>
      </ArtPageButton>
    </CheckOutContainer>
  );
}
