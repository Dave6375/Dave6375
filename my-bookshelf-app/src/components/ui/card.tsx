import React, { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border bg-card text-card-foreground shadow-sm">{children}</div>;
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="flex flex-col space-y-1.5 p-6">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl font-semibold leading-none tracking-tight">{children}</h3>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

export function CardAction({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-6 pt-0">{children}</div>;
}

export function CardFooter({ children }: { children: ReactNode }) {
  return <div className="flex items-center p-6 pt-0">{children}</div>;
}