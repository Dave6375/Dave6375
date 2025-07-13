import * as React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "error" | "warning";
  className?: string;
};

const variantClasses = {
  default: "bg-gray-200 text-gray-800",
  success: "bg-green-200 text-green-800",
  error: "bg-red-200 text-red-800",
  warning: "bg-yellow-200 text-yellow-800",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}