import React from 'react';
import Svg, { Line as LineSvg } from './svg';

interface LineProps {
  x: number | string;
  y: number | string;
  translateX?: number;
  translateY?: number;
}

const Line = ({ x, y, translateY = 0, translateX = 0 }: LineProps) => {
  return (
    <Svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '0px',
        bottom: '0px'
      }}
    >
      <LineSvg
        x1={0}
        y1={0}
        x2={x}
        y2={y}
        strokeWidth={2}
        stroke="#B5B6B7"
        strokeDasharray="6 6"
        transform={`translate(${translateX ? `${translateX}px` : '0px'}, ${
          translateY ? `${translateY}px` : '0px'
        })`}
      />
    </Svg>
  );
};

export default Line;
