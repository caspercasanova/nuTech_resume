import React from 'react';

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <hr></hr>
      <div>
        <p>CopyWrite {date}</p>
      </div>
    </>
  );
}
