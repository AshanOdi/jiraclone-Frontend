import { API_URL } from "../lib/api";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import PageHeader from "../components/pageHeader";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input, Label, Select, Textarea } from "../components/ui/form";
import { STATUSES, TYPES, formatDate } from "../lib/issues";

export default function EditIssuePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const issue = location.state;

  const [title, setTitle] = useState(issue.title);
  const [customer, setCustomer] = useState(issue.customer);
  const [description, setDescription] = useState(issue.description);
  const [type, setType] = useState(issue.type);
  const [status, setStatus] = useState(issue.status);
  const [saving, setSaving] = useState(false);

  // sent a PUT request to the backend API with the updated issue data
  async function UpdateIssue(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const updatedIssue = { customer, title, description, type, status };
      await axios.put(API_URL + `/api/issues/${issue.id}`, updatedIssue);
      toast.success("Issue Updated Successfully!");
      navigate("/issue");
    } catch (err) {
      console.error("Failed to update issue:", err);
      toast.error("Could not update issue");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader
        back
        title={`Edit Issue #${issue.id}`}
        description={`Created ${formatDate(issue.createdAt)} · Last updated ${formatDate(issue.updatedAt)}`}
      />

      <Card>
        <CardContent className="pt-5">
          <form onSubmit={UpdateIssue} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="customer">Customer</Label>
              <Input
                id="customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Type</Label>
                <Select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  {Object.entries(TYPES).map(([key, t]) => (
                    <option key={key} value={key}>
                      {t.label}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {Object.entries(STATUSES).map(([key, s]) => (
                    <option key={key} value={key}>
                      {s.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={5}
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
