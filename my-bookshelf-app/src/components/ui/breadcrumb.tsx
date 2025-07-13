import * as React from "react";

type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
};

export function Breadcrumb({
  items,
  separator = "/",
  className = "",
}: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.href ? (
            <a href={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < items.length - 1 && (
            <span className="mx-1 text-gray-400">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}