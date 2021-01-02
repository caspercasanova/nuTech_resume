import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/ui/Icon';

const SVG = styled(Icon)`
  width: 60px;
  height: 60px;

  fill: rgb(66, 149, 128);
`;

export default function Column() {
  return (
    <SVG
      enableBackground="new 0 0 100 100"
      viewBox="0 0 100 125">
      <path d="M45.081 89V49.109a1 1 0 10-2 0V89a1 1 0 102 0zM57.108 89V49.109a1 1 0 10-2 0V89a1 1 0 102 0z" />
      <path d="M76.587 26.082h-7.808v-5.137h9.21a1 1 0 001-1V11a1 1 0 00-1-1H22.2a1 1 0 00-1 1v8.945a1 1 0 001 1h9.21v5.137h-7.809c-7.465 0-13.538 6.068-13.538 13.528s6.074 13.53 13.539 13.53c3.037 0 5.72-1.047 7.809-2.88V89a1 1 0 102 0V47.994c1.155-1.682 1.971-3.71 2.342-6.014h28.685c.371 2.304 1.187 4.333 2.343 6.015V89a1 1 0 102 0V50.26c2.089 1.832 4.771 2.88 7.808 2.88 7.465 0 13.538-6.069 13.538-13.529s-6.075-13.529-13.54-13.529zM23.2 12h53.789v6.945H23.2V12zm10.21 8.945h33.369v5.137H33.41v-5.137zM76.587 51.14c-5.299 0-9.205-3.657-10.154-9.389.029-3.119 1.404-6.411 5.196-6.411 3.932 0 5.333 3.363 5.333 6.512a1 1 0 102 0c0-5.091-2.947-8.512-7.333-8.512-3.82 0-6.459 2.549-7.065 6.641h-28.94c-.609-4.091-3.257-6.641-7.091-6.641-4.386 0-7.333 3.421-7.333 8.512a1 1 0 102 0c0-3.148 1.401-6.512 5.333-6.512 3.811 0 5.194 3.292 5.223 6.411-.95 5.732-4.855 9.389-10.154 9.389-6.362 0-11.538-5.172-11.538-11.529 0-6.356 5.176-11.528 11.538-11.528h52.985c6.362 0 11.538 5.172 11.538 11.528 0 6.357-5.176 11.529-11.538 11.529z" />
    </SVG>
  );
}
