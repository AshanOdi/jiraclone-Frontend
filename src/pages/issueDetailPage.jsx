import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import PageHeader from "../components/pageHeader";
import { StatusBadge, TypeBadge } from "../components/issueBadges";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { formatDate } from "../lib/issues";

export default function IssueDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const issue = location.state;

  async function DeleteIssue() {
    if (!window.confirm(`Delete issue #${issue.id}?`)) return;
    try {
      await axios.delete(import.meta.env.VITE_BACKEND_URL + `/api/issues/${issue.id}`);
      toast.success("Issue Deleted Successfully!");
      navigate("/issue");
    } catch (err) {
      console.log(err);
      toast.error("Could not delete issue");
    }
  }

  const histories = issue.histories ?? [];

  return (
    <div>
      <PageHeader back title={issue.title} description={`Issue #${issue.id}`}>
        {/* go to edit page with the issue as state */}
        <Button variant="outline" onClick={() => navigate("/edit", { state: issue })}>
          <Pencil className="size-4" />
          Edit
        </Button>
        <Button variant="destructive" onClick={DeleteIssue}>
          <Trash2 className="size-4" />
          Delete
        </Button>
      </PageHeader>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm whitespace-pre-line">{issue.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent>
              {histories.length === 0 ? (
                <p className="text-sm text-muted-foreground">No history available.</p>
              ) : (
                <ol className="relative border-l border-border ml-1.5 space-y-5">
                  {histories.map((history) => (
                    <li key={history.id} className="pl-5">
                      <span className="absolute -left-1.5 mt-1 size-3 rounded-full border-2 border-card bg-primary" />
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={history.oldStatus} />
                        <ArrowRight className="size-3.5 text-muted-foreground" />
                        <StatusBadge status={history.newStatus} />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formatDate(history.changedAt)}
                      </p>
                    </li>
                  ))}
                </ol>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-3 text-sm">
              <Row label="Status"><StatusBadge status={issue.status} /></Row>
              <Row label="Type"><TypeBadge type={issue.type} /></Row>
              <Row label="Customer">{issue.customer}</Row>
              <Row label="Created">{formatDate(issue.createdAt)}</Row>
              <Row label="Updated">{formatDate(issue.updatedAt)}</Row>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-right">{children}</dd>
    </div>
  );
}
