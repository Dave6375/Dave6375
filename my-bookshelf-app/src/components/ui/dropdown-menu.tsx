import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

type DropdownMenuItem = {
  label: React.ReactNode;
  onSelect?: () => void;
};

type DropdownMenuProps = {
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  className?: string;
};

export function DropdownMenu({ trigger, items, className = "" }: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content
        className={`bg-white border rounded shadow-md py-1 ${className}`}
        sideOffset={5}
      >
        {items.map((item, idx) => (
          <DropdownMenuPrimitive.Item
            key={idx}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onSelect={item.onSelect}
          >
            {item.label}
          </DropdownMenuPrimitive.Item>
        ))}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
}