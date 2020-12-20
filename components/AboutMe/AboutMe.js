import React from 'react';

import Tickerbar from '../Tickerbar';
import Timer from '../Timer';

export default function AboutMe() {
  return (
    <div>
      <div>
        <h2>Interests</h2>
        <div>Design</div>
        <div>Backend Architectures</div>
        <div>Creative and Generative Code</div>
      </div>
      <Tickerbar />
      <Timer />
    </div>
  );
}
