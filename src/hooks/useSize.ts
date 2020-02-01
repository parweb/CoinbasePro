import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';

export default (a, b) => {
  const [{ width: _w, height: _h }, setSize] = useState({
    width: a,
    height: b
  });

  const { width: w, height: h } = useWindowSize();

  useEffect(() => {
    if (!w && !h) return;
    setSize({ width: w, height: h });
  }, [w, h]);

  return [_w, _h];
};
