import * as React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  className?: string;
};

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className={`inline-flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300"
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
}