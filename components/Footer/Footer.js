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

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <HaveQuestions />
      <div>Get In Contact</div>
      <hr></hr>
      <div>
        <div>People Who have visited: 1000: JoshCam</div>
        <p>CopyWrite {date}</p>
      </div>
    </>
  );
}
