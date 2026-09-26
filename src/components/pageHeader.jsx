import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

// page title with optional back button and actions on the right
export default function PageHeader({ title, description, back, children }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {back && (
        <Button variant="outline" size="icon" onClick={() => navigate(-1)} title="Back">
          <ArrowLeft className="size-4" />
        </Button>
      )}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children && <div className="ml-auto flex gap-2">{children}</div>}
    </div>
  );
}
