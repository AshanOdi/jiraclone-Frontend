import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ title, dataObj }) {
  const labels = Object.keys(dataObj);
  const values = Object.values(dataObj);

  const colors = [
    "#f02b2b",
    "#eaee1d",
    "#59eb4b",
    "#4bc0c0",
    "#9966ff",
    "#ff9f40",
    "#8bc34a",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors.slice(0, labels.length),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <Pie data={chartData} />
    </div>
  );
}
