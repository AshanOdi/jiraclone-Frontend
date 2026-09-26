import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { NEXT_STATUSES, STATUSES } from "../lib/issues";

// click-to-open dropdown for moving an issue to its next status
export default function StatusMenu({ status, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close when clicking outside the menu
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div ref={ref} className="relative" onClick={(e) => e.stopPropagation()}>
      <Button variant="outline" size="sm" onClick={() => setOpen(!open)}>
        Move
        <ChevronDown className="size-3.5" />
      </Button>

      {open && (
        <div className="absolute right-0 z-20 mt-1 w-44 rounded-md border border-border bg-card p-1 shadow-lg">
          {NEXT_STATUSES[status].map((next) => (
            <button
              key={next}
              onClick={() => {
                setOpen(false);
                onChange(next);
              }}
              className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-muted cursor-pointer"
            >
              <span className="size-2 rounded-full" style={{ background: STATUSES[next].color }} />
              {STATUSES[next].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
