"use client";

import { useTheme } from "next-themes";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Dot,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const GRAPH_CONFIG = {
  xDomain: [-7, 9],
  yDomain: [-3, 5],
  xTicks: 17,
  yTicks: 9,
  functions: [
    {
      id: "function1",
      name: "Function 1",
      color: "hsl(var(--chart-2))",
      type: "funkcja stała",
      points: [
        { x: -6, y: 2, included: true },
        { x: -2, y: 2, included: true },
      ],
    },
    {
      id: "function2",
      name: "Function 2",
      color: "hsl(var(--chart-2))",
      type: "funkcja stała",
      points: [
        { x: -2, y: 4, included: true },
        { x: 0, y: 0, included: true },
        { x: 2, y: 4, included: true },
        { x: 8, y: -2, included: true },
      ],
    },
  ],
};

const CustomDot = ({
  cx,
  cy,
  payload,
  color,
}: {
  cx?: number;
  cy?: number;
  payload?: { included: boolean };
  color: string;
}) => {
  if (!cx || !cy || !payload) return null;

  return (
    <Dot
      cx={cx}
      cy={cy}
      r={4}
      fill={payload.included ? color : "transparent"}
      stroke={color}
    />
  );
};

export default function Graph() {
  const { theme } = useTheme();

  const chartConfig = GRAPH_CONFIG.functions.reduce((acc, func) => {
    acc[func.id] = {
      label: func.name,
      color: func.color,
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Właściwości funkcji</CardTitle>
        <CardDescription>
          Multiple function graphs with properties
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
          <LineChart
            data={GRAPH_CONFIG.functions[0].points}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="x"
              type="number"
              domain={GRAPH_CONFIG.xDomain}
              tickCount={GRAPH_CONFIG.xTicks}
              interval={0}
            />
            <YAxis
              type="number"
              domain={GRAPH_CONFIG.yDomain}
              tickCount={GRAPH_CONFIG.yTicks}
              interval={0}
            />
            <ReferenceLine x={0} stroke={theme === "dark" ? "#666" : "#ccc"} />
            <ReferenceLine y={0} stroke={theme === "dark" ? "#666" : "#ccc"} />
            {GRAPH_CONFIG.functions.map((func) => (
              <Line
                key={func.id}
                type="linear"
                data={func.points}
                dataKey="y"
                stroke={func.color}
                dot={<CustomDot color={func.color} />}
                isAnimationActive={false}
                activeDot={false}
                name={func.name}
              />
            ))}
          </LineChart>
        </ChartContainer>
        <ul className="list-disc pl-5 space-y-2 font-geist-sans">
          <li>
            <strong>1. Df = </strong> {"⟨-6, 8⟩"}
          </li>
          <li>
            <strong>2. f(Df) = </strong>
            {"⟨-2, 4⟩"}
          </li>
          <li>
            <strong>3. f(x) = 0 </strong>dla x∈ {"{0, 6}"}
          </li>
          <li>
            <strong>4. f(x)↗ </strong>x∈ {"⟨0, 2⟩"}
          </li>
          <li>
            <strong>5. f(x)↘ </strong>x∈ {"⟨-2, 0⟩ ∪ ⟨2, 8⟩"}
          </li>
          <li>
            <strong>6. f(x)→ </strong>x∈ {"⟨-6, -2⟩"}
          </li>
          <li>
            <strong>7. f(x) {">"} 0 </strong>x∈ {"⟨-6, 6) ∖ {0}"}
          </li>
          <li>
            <strong>8. f(x) {"<"} 0 </strong>x∈ {"(-6, 8⟩"}
          </li>
          <li>
            <strong>9. f(x) max </strong> y = 4 dla x∈ {"{-2, 2}"}
          </li>
          <li>
            <strong>10. f(x) min </strong> y = -2 dla x∈ {"{-8}"}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
