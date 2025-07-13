import * as React from "react";

type CollapsibleProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
};

export function Collapsible({
  title,
  children,
  className = "",
  defaultOpen = false,
}: CollapsibleProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className={`border rounded-lg ${className}`}>
      <button
        className="w-full text-left px-4 py-2 font-medium focus:outline-none"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
      </button>
      {open && <div className="px-4 py-2">{children}</div>}
    </div>
  );
}