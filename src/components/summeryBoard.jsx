import CountCard from "./countCard";
import PieChart from "./pieChart";

export default function SummeryBoard({ title, task }) {
  //   console.log(task.open_Issue);

  return (
    <div className=" backdrop-blur-md w-1/2 rounded-lg shadow-2xl shadow-gray-600 flex flex-col items-center justify-center p-4 gap-4">
      <div className="relative w-full h-1/3 rounded-md flex flex-row items-center justify-center gap-2 p-2">
        <p>Based on {title}</p>
        {title === "Type" ? (
          <>
            <CountCard title="open" count={task.OPEN} />
            <CountCard title="progress" count={task.IN_PROGRESS} />
            <CountCard title="progress" count={task.WAITING_ON_CLIENT} />
            <CountCard title="resolved" count={task.RESOLVED} />
          </>
        ) : (
          <>
            <CountCard title="total" count={task.totala_Issue} />
            <CountCard title="bug" count={task.BUG} />
            <CountCard title="questions" count={task.QUESTION} />
            <CountCard title="improvement" count={task.IMPROVEMENT} />
          </>
        )}
      </div>

      <div className="bg-yellow-300 w-full h-2/3 rounded-md flex items-center justify-center">
        <PieChart />
      </div>
    </div>
  );
}
