import { Badge } from "./ui/badge";
import { STATUSES, TYPES } from "../lib/issues";

export function StatusBadge({ status }) {
  const s = STATUSES[status];
  return (
    <Badge className={s?.badge}>
      <span
        className="size-1.5 rounded-full"
        style={{ background: s?.color }}
      />
      {s?.label ?? status}
    </Badge>
  );
}

export function TypeBadge({ type }) {
  const t = TYPES[type];
  return <Badge className={t?.badge}>{t?.label ?? type}</Badge>;
}
