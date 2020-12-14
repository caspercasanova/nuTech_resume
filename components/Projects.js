import React from 'react';

const HaveQuestions = () => {
  return (
    <div>
      <h3>Have Questions ?</h3>
      <div>lorem ipsum dolor sit amet</div>
      <ul>
        <li>Can U Fix My Bugs?</li>
        <li>Do You Work For Free?</li>
        <li>Can we chill together?</li>
      </ul>
    </div>
  );
};

const GithubStats = () => {
  return <div>Sup</div>;
};

export default function Projects() {
  return (
    <>
      <div>
        <h2>Projects</h2>
        <ul>
          <li>Github Project 1</li>
          <li>Github Project 2</li>
          <li>Github Project 3</li>
        </ul>
      </div>
      <HaveQuestions />
    </>
  );
}
