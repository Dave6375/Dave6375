import * as React from "react";

type ChartProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Chart({ title, children, className = "" }: ChartProps) {
  return (
    <div className={`border rounded-lg p-4 bg-white ${className}`}>
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div className="w-full h-64 flex items-center justify-center text-gray-400">
        {children || "Chart goes here"}
      </div>
    </div>
  );
}