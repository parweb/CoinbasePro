import { useState, useEffect } from 'react';
import { scaleLinear } from 'd3-scale';
import useSize from '../hooks/useSize';

import Svg from './svg';
import Candle, { Candle as CandleModel } from './Candle';

interface ChartProps {
  candles: CandleModel[];
  domain: [number, number];
}

const Chart = ({ candles, domain }: ChartProps) => {
  const [w, h] = useSize(500, 200);

  const width = w / candles.length;

  const scaleY = scaleLinear()
    .domain(domain)
    .range([h, 0]);

  const scaleBody = scaleLinear()
    .domain([0, Math.max(...domain) - Math.min(...domain)])
    .range([0, h]);

  return (
    <Svg width={w} height={h}>
      {candles.map((candle, index) => (
        <Candle
          key={candle.date}
          {...{ candle, index, width, scaleY, scaleBody }}
        />
      ))}
    </Svg>
  );
};

export default Chart;
