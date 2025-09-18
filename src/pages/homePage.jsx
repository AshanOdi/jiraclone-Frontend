import SummeryBoard from "../components/summeryBoard";
import { allData } from "../assets/allData";
import { useState } from "react";

export default function HomePage() {
  const [data, setData] = useState(allData);

  return (
    <div className="flex w-full h-full p-4 gap-4">
      <SummeryBoard title="Type" task={data} />
      <SummeryBoard title="Status" task={data} />
    </div>
  );
}
