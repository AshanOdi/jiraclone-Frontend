import { cn } from "../../lib/utils";

const field =
  "w-full rounded-md border border-border bg-card px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:bg-muted disabled:text-muted-foreground";

export function Label({ className, ...props }) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium", className)}
      {...props}
    />
  );
}

export function Input({ className, ...props }) {
  return <input className={cn(field, "h-9", className)} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={cn(field, "resize-none", className)} {...props} />;
}

export function Select({ className, ...props }) {
  return <select className={cn(field, "h-9", className)} {...props} />;
}
