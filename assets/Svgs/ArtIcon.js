import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/ui/Icon';

const SVG = styled(Icon)`
  width: 40px;
  height: 40px;
  fill: rgb(66, 149, 128);
`;

export default function ArtIcon() {
  return (
    <SVG data-name="Layer 1" viewBox="0 0 48 60">
      <path d="M47.2 45.92a16.94 16.94 0 00-.88-2.54 70.53 70.53 0 00-3.82-7.51 62.44 62.44 0 00-5.5-8.15.79.79 0 00-.62-.28.81.81 0 00-.59.31 1.48 1.48 0 01-.25.25l-.26.15a2 2 0 01-.44.1.77.77 0 00-.59.34.8.8 0 00-.09.67 62 62 0 004.35 8.89 68.28 68.28 0 004.61 7.07 15.76 15.76 0 001.76 2c.31.29 1.12 1.06 1.88.62s.53-1.5.44-1.92zM35.14 23A7.29 7.29 0 0034 20a12 12 0 00-4.36-3.87c-.29-.16-1.23-.66-1.42-.55a10.78 10.78 0 00.23 1.55c.3 2.4-1 5.36.54 7.47A4.79 4.79 0 0031 26.18a3.08 3.08 0 002.57.05l.26-.13A1.64 1.64 0 0034 26a3 3 0 001.14-3z" />
      <path d="M25.44 27.4a8.47 8.47 0 01-.07-4.35 14.71 14.71 0 01.07-3.48 9.59 9.59 0 00.1-2.06v-.09c-.28-1.48-.62-3.32 1.26-4.39a3.26 3.26 0 011.53-.4 5.33 5.33 0 012.8 1 17.34 17.34 0 012.81 2C36.7 15 44.43 13 43.18 8.49 41.25 1.5 28.72 0 22.91 0 10.63 0 .68 9.42.68 21s9.94 21 22.22 21c2.59 0 6.8-.06 7.69-3.12 1.13-3.88-4.06-7.92-5.08-11.28a.884.884 0 01-.07-.2zM29.67 3a4.38 4.38 0 11-4.38 4.38A4.38 4.38 0 0129.67 3zM15.82 6.23a3.58 3.58 0 11-3.57 3.58 3.58 3.58 0 013.57-3.58zM9.7 13.86a3.58 3.58 0 11-3.58 3.58 3.57 3.57 0 013.58-3.58zm0 16.94a3.58 3.58 0 113.57-3.57A3.57 3.57 0 019.7 30.8zm7.15 6.33a3.58 3.58 0 113.58-3.57 3.58 3.58 0 01-3.58 3.57z" />
    </SVG>
  );
}
