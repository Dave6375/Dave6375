import * as React from "react";

type CommandProps = {
  placeholder?: string;
  onCommand?: (value: string) => void;
  className?: string;
};

export function Command({ placeholder = "Type a command...", onCommand, className = "" }: CommandProps) {
  const [value, setValue] = React.useState("");

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && value.trim()) {
      onCommand?.(value.trim());
      setValue("");
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 w-full ${className}`}
    />
  );
}