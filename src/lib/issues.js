// Shared labels and colors for issue statuses and types

export const STATUSES = {
  OPEN: { label: "Open", color: "#64748b", badge: "bg-slate-50 text-slate-700 ring-slate-200" },
  IN_PROGRESS: { label: "In Progress", color: "#4f46e5", badge: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
  WAITING_ON_CLIENT: { label: "Waiting on Client", color: "#d97706", badge: "bg-amber-50 text-amber-700 ring-amber-200" },
  RESOLVED: { label: "Resolved", color: "#16a34a", badge: "bg-green-50 text-green-700 ring-green-200" },
};

export const TYPES = {
  BUG: { label: "Bug", color: "#dc2626", badge: "bg-red-50 text-red-700 ring-red-200" },
  QUESTION: { label: "Question", color: "#0891b2", badge: "bg-cyan-50 text-cyan-700 ring-cyan-200" },
  IMPROVEMENT: { label: "Improvement", color: "#7c3aed", badge: "bg-violet-50 text-violet-700 ring-violet-200" },
};

// allowed next statuses for each status (same flow as before)
export const NEXT_STATUSES = {
  OPEN: ["IN_PROGRESS"],
  IN_PROGRESS: ["WAITING_ON_CLIENT", "RESOLVED"],
  WAITING_ON_CLIENT: ["IN_PROGRESS", "RESOLVED"],
  RESOLVED: [],
};

export function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
