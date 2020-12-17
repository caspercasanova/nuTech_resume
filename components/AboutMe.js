import React from 'react';
import AnalogClocks from '../components/AnalogClocks/AnalogClocks';
import Tickerbar from '../components/Tickerbar';
import Timer from '../components/Timer';

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
      <AnalogClocks />
    </div>
  );
}
