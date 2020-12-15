import React from 'react';
import TypedMessage from './TypedMessage';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroLander = styled.div`
  background-color: #111216;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & h1 {
    font-size: 40px;
  }
`;

export default function Header() {
  return (
    <div>
      <HeroLander>
        <div>
          <div>SOFTWARE ENGINEER</div>
          <div>
            <h1>
              <TypedMessage message={'Nicholas Lopez'} />
            </h1>
          </div>
          <div>Los Angeles (Open to Relocate)</div>
          <a href={'https://www.linkedin.com/in/310-nicholas-lopez/'}>
            <img
              align="center"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
              alt="310-nicholas-lopez"
              height="30"
              width="40"
            />
            LinkedIn
          </a>
          <a href={'https://github.com/caspercasanova'}>Github</a>
          <CopyToClipboard text={'nhjlopez@gmail.com'}>
            <p>nhjlopez@gmail.com</p>
          </CopyToClipboard>
          <button>Get In Contact</button>
        </div>
      </HeroLander>

      <div>
        <p>
          <i>
            " My personal engineering philosophy resides within the belief that
            the best software manifests when engineers repackage developers’
            tools and technologies so walks of all life are empowered through
            their use. "
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
