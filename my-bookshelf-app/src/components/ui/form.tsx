import * as React from "react";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  children: React.ReactNode;
};

export function Form({ onSubmit, className = "", children, ...props }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}