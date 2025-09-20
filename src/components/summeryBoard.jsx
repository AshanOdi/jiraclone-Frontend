import CountCard from "./countCard";
import PieChart from "./pieChart";

export default function SummeryBoard({ title, task }) {
  //   console.log(task.open_Issue);

  //dividing data into status and type for pie chart
  //making two objects for status and type
  const statusData = {
    OPEN: task.OPEN,
    IN_PROGRESS: task.IN_PROGRESS,
    WAITING_ON_CLIENT: task.WAITING_ON_CLIENT,
    RESOLVED: task.RESOLVED,
  };

  const typeData = {
    BUG: task.BUG,
    QUESTION: task.QUESTION,
    IMPROVEMENT: task.IMPROVEMENT,
  };

  return (
    <div className=" backdrop-blur-xxs shadow-lg shadow-gray-400 w-1/2 rounded-lg   flex flex-col items-center justify-center p-4 gap-4">
      <div className="relative  w-full h-1/3 rounded-md flex flex-row items-center justify-center gap-2 p-2">
        <p className="text-xl font-bold  mb-4 absolute top-2 left-2">
          Based on {title}
        </p>
        {title === "Type" ? (
          <>
            <CountCard title="total" count={task.totala_Issue} />
            <CountCard title="bug" count={task.BUG} />
            <CountCard title="questions" count={task.QUESTION} />
            <CountCard title="improvement" count={task.IMPROVEMENT} />
          </>
        ) : (
          <>
            <CountCard title="total" count={task.totala_Issue} />
            <CountCard title="open" count={task.OPEN} />
            <CountCard title="progress" count={task.IN_PROGRESS} />
            <CountCard title="progress" count={task.WAITING_ON_CLIENT} />
            <CountCard title="resolved" count={task.RESOLVED} />
          </>
        )}
      </div>

      <div className=" w-full  h-2/3 rounded-md flex items-center justify-center">
        {title === "Type" ? (
          //totally copy pasted from pie chart documentation
          <PieChart title="Type Distribution" dataObj={typeData} />
        ) : (
          <PieChart title="Status Distribution" dataObj={statusData} />
        )}
      </div>
    </div>
  );
}
