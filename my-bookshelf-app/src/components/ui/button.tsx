import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "secondary" | "danger";
  className?: string;
};

const variantClasses = {
  default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

