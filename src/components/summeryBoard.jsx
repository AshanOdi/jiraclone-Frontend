import PieChart from "./pieChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { STATUSES, TYPES } from "../lib/issues";

// chart card showing issue distribution by "Status" or "Type"
export default function SummeryBoard({ title, task }) {
  const source = title === "Type" ? TYPES : STATUSES;

  const items = Object.entries(source).map(([key, meta]) => ({
    label: meta.label,
    value: task[key],
    color: meta.color,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>By {title}</CardTitle>
        <CardDescription>Issue distribution by {title.toLowerCase()}</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart items={items} />
      </CardContent>
    </Card>
  );
}
