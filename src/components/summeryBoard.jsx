import CountCard from "./countCard";
import PieChart from "./pieChart";

export default function SummeryBoard() {
  return (
    <div className=" bg-yellow-400 backdrop-blur-md w-1/2 rounded-lg shadow-2xl flex flex-col items-center justify-center p-4 gap-4">
      <div className="relative bg-yellow-200 w-full h-1/3 rounded-md flex flex-row items-center justify-center">
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
      </div>

      <div className="bg-yellow-300 w-full h-2/3 rounded-md flex items-center justify-center">
        <PieChart />
      </div>
    </div>
  );
}
