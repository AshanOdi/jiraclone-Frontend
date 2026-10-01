import { API_URL } from "../lib/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircle2, CircleDot, Clock, Layers, Loader } from "lucide-react";
import SummeryBoard from "../components/summeryBoard";
import CountCard from "../components/countCard";
import { StatusBadge, TypeBadge } from "../components/issueBadges";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { STATUSES, formatDate } from "../lib/issues";

export default function HomePage() {
  const [issues, setIssues] = useState([]);
  const navigate = useNavigate();

  // Fetch issues on component mount
  useEffect(() => {
    axios
      .get(API_URL + "/api/issues")
      .then((res) => setIssues(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching issues:", err));
  }, []);

  // Calculate counts for each status and type
  const summary = { total: issues.length };
  issues.forEach((issue) => {
    summary[issue.status] = (summary[issue.status] || 0) + 1;
    summary[issue.type] = (summary[issue.type] || 0) + 1;
  });

  const recent = [...issues]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of all customer issues
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <CountCard title="Total" count={summary.total} icon={Layers} />
        <CountCard
          title="Open"
          count={summary.OPEN}
          icon={CircleDot}
          color={STATUSES.OPEN.color}
        />
        <CountCard
          title="In Progress"
          count={summary.IN_PROGRESS}
          icon={Loader}
          color={STATUSES.IN_PROGRESS.color}
        />
        <CountCard
          title="Waiting"
          count={summary.WAITING_ON_CLIENT}
          icon={Clock}
          color={STATUSES.WAITING_ON_CLIENT.color}
        />
        <CountCard
          title="Resolved"
          count={summary.RESOLVED}
          icon={CheckCircle2}
          color={STATUSES.RESOLVED.color}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <SummeryBoard title="Status" task={summary} />
        <SummeryBoard title="Type" task={summary} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recently Updated</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {recent.length === 0 ? (
            <p className="px-5 pb-5 text-sm text-muted-foreground">
              No issues yet.
            </p>
          ) : (
            <ul className="divide-y divide-border border-t border-border">
              {recent.map((issue) => (
                <li
                  key={issue.id}
                  onClick={() => navigate("/detail", { state: issue })}
                  className="flex items-center gap-3 px-5 py-3 text-sm cursor-pointer hover:bg-muted/60"
                >
                  <span className="text-muted-foreground">#{issue.id}</span>
                  <span className="font-medium truncate">{issue.title}</span>
                  <span className="hidden md:block text-muted-foreground truncate">
                    {issue.customer}
                  </span>
                  <div className="ml-auto flex items-center gap-2 shrink-0">
                    <TypeBadge type={issue.type} />
                    <StatusBadge status={issue.status} />
                    <span className="hidden lg:block text-xs text-muted-foreground w-36 text-right">
                      {formatDate(issue.updatedAt)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
