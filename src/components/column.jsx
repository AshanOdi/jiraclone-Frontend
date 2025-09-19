import Card from "./card";

export default function Column({ title, tasks, setData }) {
  return (
    <div className=" h-[calc(100dvh-120px)]  backdrop-blur-xxs  rounded-xl p-4 w-1/4 h-[80vh] overflow-y-auto shadow-lg shadow-gray-500">
      <h2 className="font-bold mb-4">{title.replace("_", " ")}</h2>
      {tasks?.map((task) => (
        <Card key={task.id} task={task} setData={setData} />
      ))}
    </div>
  );
}
