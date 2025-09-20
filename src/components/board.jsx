import { useEffect, useState } from "react";
import { initialData } from "../assets/sample";
import Column from "./column";
import axios from "axios";

export default function Board() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch issues and set data on component mount and when isLoading changes
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/issues")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [isLoading]);

  return (
    <div className="w-full h-full flex gap-4 p-4">
      {/* 
      Board divided into four columns
      sending setData,title,tasks and setIsLoading to each column to update the board after status change
      can useContext and redux instead of prop drilling
      still using prop drilling for simplicity(still learning use context and redux)
      */}
      <Column
        setData={setData}
        setIsLoading={setIsLoading}
        title="OPEN"
        tasks={data.filter((i) => i.status === "OPEN")}
      />
      <Column
        setData={setData}
        setIsLoading={setIsLoading}
        title="IN_PROGRESS"
        tasks={data.filter((i) => i.status === "IN_PROGRESS")}
      />
      <Column
        setData={setData}
        setIsLoading={setIsLoading}
        title="WAITING_ON_CLIENT"
        tasks={data.filter((i) => i.status === "WAITING_ON_CLIENT")}
      />
      <Column
        setData={setData}
        setIsLoading={setIsLoading}
        title="RESOLVED"
        tasks={data.filter((i) => i.status === "RESOLVED")}
      />
    </div>
  );
}
