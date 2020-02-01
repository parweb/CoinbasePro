import { useState, useCallback } from 'react';

import data from '../data.json';
import useEventListener from '../hooks/useEventListener';
import Chart from '../components/Chart';
import Line from '../components/Line';
import { Candle } from '../components/Candle';

const candles = data;

const getDomain = (rows: Candle[]): [number, number] => {
  const values = rows.map(({ high, low }) => [high, low]).flat();
  return [Math.min(...values), Math.max(...values)];
};

const domain = getDomain(candles);

export default () => {
  const [{ x, y }, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener('mousemove', handler);

  return (
    <div
      style={{
        flex: '1',
        margin: '-8px',
        position: 'relative',
        backgroundColor: 'black'
      }}
    >
      <Chart {...{ candles, domain }} />
      <Line translateY={y} x="100%" y={0} />
      <Line translateX={x} x={0} y="100%" />
    </div>
  );
};
