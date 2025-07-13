import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  trigger,
  className = "",
}: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg ${className}`}
        >
          {title && <DialogPrimitive.Title className="text-lg font-bold">{title}</DialogPrimitive.Title>}
          {description && (
            <DialogPrimitive.Description className="mt-2 text-sm text-gray-600">
              {description}
            </DialogPrimitive.Description>
          )}
          <div className="mt-4">{children}</div>
          {footer && <div className="mt-4">{footer}</div>}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}