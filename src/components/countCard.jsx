import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";

// A card to show count of issues based on different criteria
export default function CountCard({ title, count, icon: Icon, color }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/issue")}
      className="p-4 cursor-pointer transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {Icon && <Icon className="size-4" style={{ color }} />}
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{count ?? 0}</p>
    </Card>
  );
}
