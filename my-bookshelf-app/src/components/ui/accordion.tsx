import * as React from "react";

type AccordionProps = {
  children: React.ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  return <div className="border rounded-md divide-y">{children}</div>;
}

type AccordionItemProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
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