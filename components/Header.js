import React from 'react';
import TypedMessage from './TypedMessage';
import styled from 'styled-components';
export default function Header() {
  return (
    <div>
      <div>
        <div>
          <TypedMessage message={'Im Nicholas'} />
        </div>
        <div>
          <div>SOFTWARE ENGINEER</div>
          Current Residence: Los Angeles (Open to Relocate)
          <a href={'https://www.linkedin.com/in/310-nicholas-lopez/'}>
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
              alt="310-nicholas-lopez"
              height="30"
              width="40"
            />
          </a>
          <a href={'https://github.com/caspercasanova'}>Github</a>
          <CopyToClipboard text={'nhjlopez@gmail.com'}>
            <p>nhjlopez@gmail.com</p>
          </CopyToClipboard>
        </div>
      </div>

      <div>
        <p>
          <i>
            My personal engineering philosophy resides within the belief that
            the best software manifests when engineers repackage developers’
            tools and technologies so walks of all life are empowered through
            their use.
          </i>
        </p>
      </div>
    </div>
  );
}

const CopyContainer = styled.div`
  cursor: pointer;
  &:hover {
    color: cyan;
  }
  & label {
    font-size: 10px;
    margin: 0;
  }
`;

const CopyToClipboard = ({ text, children }) => {
  const copy = () => {
    navigator.clipboard.writeText(`${text}`);
  };
  // on success put a check mark
  return (
    <CopyContainer onClick={() => copy()}>
      {children}
      <label>[ Click To Copy ]</label>
    </CopyContainer>
  );
};
