interface RectProps {
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
}

const Rect = ({ x, y, width, height, fill }: RectProps) => (
  <rect
    x={x}
    y={y}
    width={width < 0 ? 1 : width}
    height={height}
    style={{ fill }}
  />
);

export default Rect;
