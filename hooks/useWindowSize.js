import { useState, useLayoutEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
