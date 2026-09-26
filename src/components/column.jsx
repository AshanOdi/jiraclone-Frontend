import Card from "./card";
import { STATUSES } from "../lib/issues";

export default function Column({ title, tasks, setData, setIsLoading }) {
  const meta = STATUSES[title];

  return (
    <div className="flex flex-col rounded-xl bg-muted/70 border border-border min-h-[60vh]">
      <div className="flex items-center gap-2 px-3 py-3">
        <span className="size-2 rounded-full" style={{ background: meta.color }} />
        <h2 className="text-sm font-semibold">{meta.label}</h2>
        <span className="ml-auto rounded-full bg-card border border-border px-2 text-xs text-muted-foreground">
          {tasks.length}
        </span>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto px-2 pb-2 max-h-[calc(100vh-240px)]">
        {tasks.length === 0 && (
          <p className="py-8 text-center text-xs text-muted-foreground">No issues</p>
        )}
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            setData={setData}
            setIsLoading={setIsLoading}
          />
        ))}
      </div>
    </div>
  );
}
