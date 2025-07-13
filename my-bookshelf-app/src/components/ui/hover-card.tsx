import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

type HoverCardProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
};

export function HoverCard({
  trigger,
  content,
  side = "top",
  className = "",
}: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        {trigger}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          side={side}
          className={`bg-white border rounded shadow-md p-4 ${className}`}
          sideOffset={5}
        >
          {content}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
}