import { API_URL } from "../lib/api";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Column from "./column";
import axios from "axios";
import { Input } from "./ui/form";
import { STATUSES } from "../lib/issues";

export default function Board() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch issues and set data on component mount and when isLoading changes
  useEffect(() => {
    if (!isLoading) return;
    axios
      .get(API_URL + "/api/issues")
      .then((res) => setData(Array.isArray(res.data) ? res.data : []))
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [isLoading]);

  const query = search.trim().toLowerCase();
  const filtered = data.filter(
    (i) =>
      !query ||
      i.title?.toLowerCase().includes(query) ||
      i.customer?.toLowerCase().includes(query),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Issue Board</h1>
          <p className="text-sm text-muted-foreground">
            Track and move issues through their workflow
          </p>
        </div>
        <div className="relative sm:w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search title or customer"
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* one column per status; setData and setIsLoading update the board after status change */}
        {Object.keys(STATUSES).map((status) => (
          <Column
            key={status}
            title={status}
            setData={setData}
            setIsLoading={setIsLoading}
            tasks={filtered.filter((i) => i.status === status)}
          />
        ))}
      </div>
    </div>
  );
}
