import * as React from "react";

type AlertProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "success" | "error" | "warning";
  children?: React.ReactNode;
};

const variantClasses = {
  default: "bg-gray-100 text-gray-800 border-gray-300",
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

export function Alert({
  title,
  description,
  variant = "default",
  children,
}: AlertProps) {
  return (
    <div className={`border rounded-lg p-4 ${variantClasses[variant]}`}>
      <div className="font-semibold">{title}</div>
      {description && <div className="text-sm mt-1">{description}</div>}
      {children}
    </div>
  );
}