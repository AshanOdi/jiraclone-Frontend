import { API_URL } from "../lib/api";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CalendarClock, Trash2, User } from "lucide-react";
import { TypeBadge } from "./issueBadges";
import StatusMenu from "./statusMenu";
import { Button } from "./ui/button";
import { formatDate } from "../lib/issues";

export default function Card({ task, setData, setIsLoading }) {
  const navigate = useNavigate();

  async function DeleteIssue(e) {
    e.stopPropagation();
    try {
      await axios.delete(API_URL + `/api/issues/${task.id}`);
      toast.success("Resolved Issue Deleted Successfully!");
      setData((prev) => prev.filter((issue) => issue.id !== task.id));
    } catch (err) {
      console.log(err);
      toast.error("Could not delete issue");
    }
  }

  // Update issue status
  async function UpdateStatus(newStatus) {
    try {
      const res = await axios.put(API_URL + `/api/issues/${task.id}/status`, {
        status: newStatus,
      });

      setData((prev) =>
        prev.map((issue) =>
          issue.id === task.id ? { ...issue, status: res.data.status } : issue,
        ),
      );
      toast.success(
        newStatus === "RESOLVED"
          ? "Hurray, successfully Solved Issue!"
          : "Status Changed Successfully!",
      );

      // refetch so history is up to date
      setIsLoading(true);
    } catch (err) {
      console.error("Failed to update issue:", err);
      toast.error("Could not update status");
    }
  }

  return (
    <div
      onClick={() => navigate("/detail", { state: task })}
      className="group rounded-lg border border-border bg-card p-3 shadow-xs cursor-pointer transition hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium leading-snug">{task.title}</p>
        <span className="text-xs text-muted-foreground shrink-0">
          #{task.id}
        </span>
      </div>

      <div className="mt-2 flex flex-col gap-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <User className="size-3.5" />
          {task.customer}
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarClock className="size-3.5" />
          {formatDate(task.updatedAt)}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <TypeBadge type={task.type} />

        {task.status === "RESOLVED" ? (
          <Button
            variant="ghost"
            size="icon"
            title="Delete"
            onClick={DeleteIssue}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        ) : (
          <StatusMenu status={task.status} onChange={UpdateStatus} />
        )}
      </div>
    </div>
  );
}
