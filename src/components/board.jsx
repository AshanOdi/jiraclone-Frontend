import { useEffect, useState } from "react";
import { initialData } from "../assets/sample";
import Column from "./column";

export default function Board() {
  const [data, setData] = useState(initialData);

  console.log("sdasasdsd", data);

  return (
    <div className="w-full  flex flex-raw gap-4 p-6">
      <Column setData={setData} title="OPEN" tasks={data[0]} />
      <Column setData={setData} title="IN PROGRESS" tasks={data[1]} />
      <Column setData={setData} title="WAITING ON CLIENT" tasks={data[2]} />
      <Column setData={setData} title="RESOLVED" tasks={data[3]} />
    </div>
  );
}
