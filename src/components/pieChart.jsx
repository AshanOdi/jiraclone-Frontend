import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// doughnut chart of issues grouped by a criteria
// items: [{ label, value, color }]
export default function PieChart({ items }) {
  const total = items.reduce((sum, i) => sum + (i.value || 0), 0);

  const chartData = {
    labels: items.map((i) => i.label),
    datasets: [
      {
        data: items.map((i) => i.value || 0),
        backgroundColor: items.map((i) => i.color),
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative size-44 shrink-0">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-semibold">{total}</span>
          <span className="text-xs text-muted-foreground">issues</span>
        </div>
      </div>

      <ul className="w-full space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-full"
              style={{ background: i.color }}
            />
            <span className="text-muted-foreground">{i.label}</span>
            <span className="ml-auto font-medium">{i.value || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
