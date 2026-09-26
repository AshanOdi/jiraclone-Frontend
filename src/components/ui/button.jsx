import { cn } from "../../lib/utils";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border bg-card hover:bg-muted",
  ghost: "hover:bg-muted",
  destructive: "bg-destructive text-white hover:bg-destructive/90",
};

const sizes = {
  default: "h-9 px-4",
  sm: "h-8 px-3 text-xs",
  icon: "h-8 w-8",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
