import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 35px;
  text-shadow: rgba(0, 0, 0, 0.004) 1px 1px 1px;
  background-color: rgb(21, 33, 73);
`;

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}
