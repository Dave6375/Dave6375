import * as React from "react";

type CalendarProps = {
  value?: string;
  onChange?: (date: string) => void;
  className?: string;
};

export function Calendar({ value, onChange, className = "" }: CalendarProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={e => onChange?.(e.target.value)}
      className={`border rounded px-3 py-2 ${className}`}
    />
  );
}