import * as React from "react";

type AspectRatioProps = {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
};

export function AspectRatio({
  ratio = 16 / 9,
  children,
  className = "",
}: AspectRatioProps) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${ratio}` }}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}