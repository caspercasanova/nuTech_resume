import React from 'react';
import styled from 'styled-components';
import Quill from '../../assets/Svgs/Quill';

const BlogPostSection = styled.section`
  width: 100%;
`;
const BlogPostHeader = styled.div`
  display: flex;
  align-items: center;
`;

const BlogPostBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogList = styled.ul`
  display: flex;
  flex-direction: column;
  color: rgb(66, 149, 128);

  & a {
    font-size: 14px;
    transition: transform 0.1s ease-in;
    &:hover {
      cursor: pointer;
      color: #426ba7;
      text-decoration: underline;
    }
  }
`;

export default function BlogPosts() {
  return (
    <BlogPostSection>
      <BlogPostHeader>
        <Quill />
        <h3>Blog Posts</h3>
      </BlogPostHeader>
      <hr />
      <BlogPostBody>
        <BlogList>
          <li>
            <a
              href={
                'https://nhjlopez.medium.com/front-end-dev-mantras-1523ee445a96'
              }>
              Front End Dev Mantras
            </a>
          </li>
          <li>
            <a
              href={
                'https://nhjlopez.medium.com/some-programmer-resources-37d232dcad69'
              }>
              Some Developer Resources
            </a>
          </li>
          <li>
            <a>Front End Dev Mantras for 2021</a>
          </li>
          <li>
            <a>
              Making My Portfolio Site for 2021 and Beyond
            </a>
          </li>
          <li>
            <a>Trace Study: Sci-Fi Compoentns & React</a>
          </li>
        </BlogList>
      </BlogPostBody>
    </BlogPostSection>
  );
}
