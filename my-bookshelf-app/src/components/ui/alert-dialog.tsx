import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: AlertDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
          {description && (
            <Dialog.Description className="mt-2 text-sm text-gray-600">
              {description}
            </Dialog.Description>
          )}
          {footer && <div className="mt-4">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}