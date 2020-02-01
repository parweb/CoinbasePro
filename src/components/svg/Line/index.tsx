interface LineProps {
  x1: number | string;
  y1: number | string;
  x2: number | string;
  y2: number | string;
  stroke: string;
  strokeWidth: number;
  strokeDasharray?: string;
  transform?: string;
}

const Line = ({
  x1,
  x2,
  y1,
  y2,
  stroke,
  strokeWidth,
  strokeDasharray,
  transform
}: LineProps) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    style={{ stroke, strokeDasharray, strokeWidth, transform }}
  />
);

export default Line;
