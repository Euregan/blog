import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./LineChart.css";
import { useId } from "react";

const width = 1600;
const height = 700;
const margin = 0;
const lineWidth = 5;
const color = "white";

type Point = { label: string | number; value: number };

type Data = Array<{
  label: string;
  color: string;
  points: Array<Point>;
}>;

type Props = {
  title: string;
  data: Data;
};

const LineChart = ({ title, data }: Props) => {
  const id = useId();

  const highestValue = data.reduce(
    (highestYet, { points }) =>
      points.reduce(
        (highestYet, { value }) => (value > highestYet ? value : highestYet),
        highestYet
      ),
    -Infinity
  );
  const lowestValue = data.reduce(
    (highestYet, { points }) =>
      points.reduce(
        (highestYet, { value }) => (value < highestYet ? value : highestYet),
        highestYet
      ),
    0
  );

  const graphHeight = height - margin * 2 - lineWidth / 2;
  const graphWidth = width - margin * 2;

  const pointsToPath = (points: Array<Point>): string => {
    const gap = graphWidth / (points.length - 1);

    let path = `M ${margin + lineWidth} ${
      (1 - points[0].value / highestValue) * graphHeight + margin
    }`;

    for (let i = 1; i < points.length; i++) {
      const x = gap * i + margin;
      const y =
        (1 - points[i].value / highestValue) * graphHeight +
        margin +
        // Making sure the top line is not cut off at the edge
        lineWidth / 2;

      path += ` C ${gap * (i - 0.5) + margin} ${
        (1 - points[i - 1].value / highestValue) * graphHeight + margin
      }, ${gap * (i - 0.5) + margin} ${y}, ${x} ${y}`;
    }

    return path;
  };

  return (
    <div className={styles.chart}>
      <div id={id}>{title}</div>
      <svg
        style={assignInlineVars({
          [styles.width]: String(width),
          [styles.height]: String(height),
        })}
        className={styles.svg}
        viewBox={`0 0 ${width} ${height}`}
        aria-labelledby={id}
      >
        {data.map((data) => (
          <path
            key={data.label}
            d={pointsToPath(data.points)}
            fill="none"
            stroke={data.color}
            strokeWidth={lineWidth}
          />
        ))}

        {/* Horizontal axis */}
        <line
          x1={margin}
          y1={height - margin - lineWidth / 2}
          x2={width - margin}
          y2={height - margin - lineWidth / 2}
          stroke={color}
          strokeWidth={lineWidth}
        />
        {/* Vertical axis */}
        <line
          x1={margin + lineWidth / 2}
          y1={margin}
          x2={margin + lineWidth / 2}
          y2={height - margin}
          stroke={color}
          strokeWidth={lineWidth}
        />
      </svg>
    </div>
  );
};

export default LineChart;
