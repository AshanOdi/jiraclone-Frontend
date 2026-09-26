import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input, Label, Select, Textarea } from "../components/ui/form";
import { TYPES } from "../lib/issues";

export default function CreateIssuePage() {
  const [title, setTitle] = useState("");
  const [customer, setCustomer] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("BUG");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  //creating new issue (new issues always start as OPEN)
  async function CreateIssue(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const issue = { title, customer, description, type, status: "OPEN" };
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/issues", issue);
      toast.success("Successfully Created Issue!");
      navigate("/issue");
    } catch (err) {
      console.log(err);
      toast.error("Could not create issue");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader
        back
        title="Create Issue"
        description="Log a new customer issue"
      />

      <Card>
        <CardContent className="pt-5">
          <form onSubmit={CreateIssue} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="e.g. Login page error"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer">Customer</Label>
                <Input
                  id="customer"
                  placeholder="e.g. Ashan"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  required
                />
              </div>
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
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="What is going wrong?"
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
                {saving ? "Creating..." : "Create Issue"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
