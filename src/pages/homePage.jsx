import { useEffect, useState } from "react";
import axios from "axios";
import SummeryBoard from "../components/summeryBoard";
import Footer from "../components/footer";

export default function HomePage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/issues")
      .then((res) => {
        const issues = res.data;
        const summary = {
          totala_Issue: issues.length,
          OPEN: 0,
          IN_PROGRESS: 0,
          WAITING_ON_CLIENT: 0,
          RESOLVED: 0,
          BUG: 0,
          QUESTION: 0,
          IMPROVEMENT: 0,
        };

        issues.forEach((issue) => {
          if (summary.hasOwnProperty(issue.status)) {
            summary[issue.status]++;
          }
          if (summary.hasOwnProperty(issue.type)) {
            summary[issue.type]++;
          }
        });

        setData(summary);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching issues:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex w-full h-full flex flex-col ">
      <div className="flex flex-row w-full h-full p-4 gap-4">
        <SummeryBoard title="Type" task={data} />
        <SummeryBoard title="Status" task={data} />
      </div>

      <Footer />
    </div>
  );
}
