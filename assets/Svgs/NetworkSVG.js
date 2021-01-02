import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/ui/Icon';

const SVG = styled(Icon)`
  width: 40px;
  height: 40px;
  fill: rgb(66, 149, 128);
`;

export default function NetworkSVG() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 128 160">
      <path d="M115.111 100.146c-3.365 0-6.426 1.307-8.725 3.426l-17.1-13.049c.349-.836.545-1.75.545-2.711 0-3.883-3.16-7.043-7.043-7.043-2.323 0-4.371 1.145-5.654 2.883l-11.96-5.553c.01-.221.034-.439.034-.662 0-8.318-6.766-15.086-15.083-15.086-2.977 0-5.747.879-8.089 2.371l-3.121-16.273a8.721 8.721 0 005.935-5.816l20.656 8.932a10.551 10.551 0 00-.298 2.459c0 5.9 4.801 10.699 10.702 10.699 2.594 0 4.973-.928 6.827-2.471l15.251 10.592a10.123 10.123 0 00-.425 2.891c0 5.594 4.555 10.146 10.154 10.146 5.597 0 10.148-4.553 10.148-10.146 0-5.598-4.552-10.152-10.148-10.152-3.742 0-7.011 2.041-8.771 5.063L84.384 60.528a10.633 10.633 0 002.225-6.506c0-.422-.031-.836-.079-1.246l6.124-.861c1.292 3.182 4.412 5.434 8.053 5.434 4.789 0 8.687-3.896 8.687-8.686 0-4.791-3.897-8.688-8.687-8.688-4.792 0-8.691 3.896-8.691 8.688 0 .322.021.643.055.957l-6.079.855a10.742 10.742 0 00-5.587-6.15L90.81 25.636c.148.01.29.045.441.045 4.285 0 7.77-3.486 7.77-7.77 0-4.287-3.484-7.775-7.77-7.775-4.289 0-7.778 3.488-7.778 7.775 0 3.277 2.049 6.074 4.928 7.213L78.134 43.56a10.699 10.699 0 00-2.223-.236c-3.941 0-7.382 2.146-9.239 5.326l-21.48-9.29a8.705 8.705 0 00-5.235-7.25l1.854-18.535c3.075-.113 5.548-2.637 5.548-5.74a5.768 5.768 0 00-5.761-5.762 5.77 5.77 0 00-5.766 5.762c0 2.711 1.89 4.977 4.417 5.588l-1.82 18.199a8.693 8.693 0 00-1.889-.213c-2.863 0-5.4 1.396-6.984 3.541l-6.235-4.564a6.816 6.816 0 001.066-3.639c0-3.781-3.076-6.859-6.856-6.859-3.783 0-6.862 3.078-6.862 6.859 0 3.783 3.079 6.859 6.862 6.859a6.832 6.832 0 004.818-1.988l6.389 4.678a8.608 8.608 0 00-.889 3.801c0 4.533 3.492 8.262 7.928 8.65l3.496 18.232c-2.618 2.715-4.238 6.396-4.238 10.457 0 .078.011.152.013.229l-18.486 3.012c-1.384-2.969-4.387-5.035-7.869-5.035C3.9 75.642 0 79.538 0 84.329c0 4.789 3.9 8.686 8.692 8.686 4.789 0 8.687-3.896 8.687-8.686 0-.742-.104-1.461-.28-2.152l18.055-2.938c.577 4.803 3.417 8.912 7.423 11.238l-7.049 7.385a10.816 10.816 0 00-4.93-1.193c-6.003 0-10.888 4.881-10.888 10.881 0 5.998 4.885 10.879 10.888 10.879 5.998 0 10.878-4.881 10.878-10.879a10.84 10.84 0 00-3.363-7.848l7.509-7.867a15.08 15.08 0 004.505.688c6.972 0 12.836-4.762 14.558-11.199l11.193 5.178a6.906 6.906 0 00-.135 1.311c0 3.883 3.162 7.041 7.047 7.041 1.788 0 3.406-.691 4.649-1.793l16.905 12.9a12.829 12.829 0 00-2.128 7.078c0 7.107 5.785 12.889 12.896 12.889 7.106 0 12.889-5.781 12.889-12.889s-5.783-12.893-12.89-12.893z" />
    </SVG>
  );
}
