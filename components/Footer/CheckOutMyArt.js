import React from 'react';
import styled from 'styled-components';
import ArtIcon from '../../assets/Svgs/ArtIcon';

const CheckOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  text-align: center;
`;
const CheckOutHeader = styled.div`
  display: flex;
  align-items: center;
`;

export default function CheckOutMyArt() {
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <ArtIcon />
        <h3>Check Out My "Art"</h3>
      </CheckOutHeader>
      <div>I Am Not An Artist</div>
      <div>-Nicholas Lopez 2020</div>
    </CheckOutContainer>
  );
}
