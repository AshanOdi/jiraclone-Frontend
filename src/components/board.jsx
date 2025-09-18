import { useEffect, useState } from "react";
import { initialData } from "../assets/sample";
import Column from "./column";
import axios from "axios";

export default function Board() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/issues/cat")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  return (
    <div className="w-full h-[calc(100dvh-80px)] flex flex-raw gap-4 p-6">
      <Column setData={setData} title="OPEN" tasks={data[0]} />
      <Column setData={setData} title="IN PROGRESS" tasks={data[1]} />
      <Column setData={setData} title="WAITING ON CLIENT" tasks={data[2]} />
      <Column setData={setData} title="RESOLVED" tasks={data[3]} />
    </div>
  );
}
