import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/ui/Icon';

const SVG = styled(Icon)`
  width: 50px;
  height: 50px;
  fill: rgb(66, 149, 128);
`;

export default function Quill() {
  return (
    <SVG
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 9.832 22.972">
      <path d="M6.55 18.132c-.182.365-.123.305-.34-.062l.387-3.291-.73.419.498-.932c-1.223-.611-1.332-.259-1.49-1.77.586.447.91.36 1.645.45-.545-.43-.965-.595-1.503-1.117a7.827 7.827 0 01-.194-1.253c.468.385.694.492 1.237.76.32-.522-1.277-.157-1.185-2.397l.603.416c.061-.361-.565-.598-.837-.784-.314-1.339-.485-1.819-1.083-3.057.598.017 1.054-.034 1.649-.097C2.806 5.041 2.173 4 0 0c2.168.346 3.204.66 4.22 2.458-.02-.329-.043-.658-.064-.986 1.564.768 2.57 1.505 2.846 3.347l.08-.922c1.808 2 1.93 2.936 1.44 5.515l.55-2.086c.502 1.466.69 2.415.76 3.994-.508.445-.614.497-1.229.776l1.019.146c-.377 1.557-.633 1.472-1.99 2.328.197-2.25.728-5.315-.71-7.681 1.04 4.254.388 7.137-.371 11.243z" />
    </SVG>
  );
}
