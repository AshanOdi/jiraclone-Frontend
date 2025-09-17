import { useEffect, useState } from "react";
import { initialData } from "../assets/sample";
import Column from "./column";

export default function Board() {
  const [data, setData] = useState(initialData);

  return (
    <div className="w-full  flex flex-raw gap-4 p-6">
      <Column title="OPEN" tasks={data[0]} />
      <Column title="IN PROGRESS" tasks={data[1]} />
      <Column title="WAITING ON CLIENT" tasks={data[2]} />
      <Column title="RESOLVED" tasks={data[3]} />
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
