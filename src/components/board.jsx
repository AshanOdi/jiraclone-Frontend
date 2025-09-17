import { useState } from "react";
import { initialData } from "../assets/sample";
import Column from "./column";

export default function Board() {
  const [data, setData] = useState(initialData);

  return (
    <div className="w-full h-screen flex flex-raw gap-4 p-6 flex">
      <Column title="OPEN" tasks={data.todo} />
      <Column title="IN PROGRESS" tasks={data.inProgress} />
      <Column title="WAITING ON CLIENT" tasks={data.codeReview} />
      <Column title="RESOLVED" tasks={data.done} />
    </div>
  );
}

// export default function Board() {
//   const [data, setData] = useState(initialData);

//   return (
//     <div className="flex gap-4 p-6 overflow-x-auto">
//       <Column title="TO DO" tasks={data.todo} />
//       <Column title="IN PROGRESS" tasks={data.inProgress} />
//       <Column title="CODE REVIEW" tasks={data.codeReview} />
//       <Column title="DONE" tasks={data.done} />
//     </div>
//   );
// }
