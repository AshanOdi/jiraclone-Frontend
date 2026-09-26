import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// merge tailwind classes without conflicts (shadcn/ui helper)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
