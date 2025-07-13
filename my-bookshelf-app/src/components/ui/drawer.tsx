import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  trigger?: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
};

export function Drawer({
  open,
  onOpenChange,
  title,
  children,
  footer,
  trigger,
  side = "right",
  className = "",
}: DrawerProps) {
  const sideClasses = {
    right: "fixed top-0 right-0 h-full w-80",
    left: "fixed top-0 left-0 h-full w-80",
    top: "fixed top-0 left-0 w-full h-80",
    bottom: "fixed bottom-0 left-0 w-full h-80",
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
        <DialogPrimitive.Content
          className={`${sideClasses[side]} bg-white shadow-lg p-6 ${className}`}
        >
          {title && <div className="text-lg font-bold mb-4">{title}</div>}
          <div>{children}</div>
          {footer && <div className="mt-4">{footer}</div>}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}