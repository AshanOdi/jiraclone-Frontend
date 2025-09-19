import { useEffect, useState } from "react";
import { initialData } from "../assets/sample";
import Column from "./column";
import axios from "axios";

export default function Board() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/issues")
      .then((res) => setData(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className="w-full h-full flex gap-4 p-4">
      <Column
        setData={setData}
        title="OPEN"
        tasks={data.filter((i) => i.status === "OPEN")}
      />
      <Column
        setData={setData}
        title="IN_PROGRESS"
        tasks={data.filter((i) => i.status === "IN_PROGRESS")}
      />
      <Column
        setData={setData}
        title="WAITING_ON_CLIENT"
        tasks={data.filter((i) => i.status === "WAITING_ON_CLIENT")}
      />
      <Column
        setData={setData}
        title="RESOLVED"
        tasks={data.filter((i) => i.status === "RESOLVED")}
      />
    </div>
  );
}
