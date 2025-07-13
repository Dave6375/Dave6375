import * as React from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  children?: React.ReactNode;
};

export function Avatar({
  src,
  alt = "Avatar",
  size = 40,
  className = "",
  children,
}: AvatarProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      ) : (
        children || <span className="text-gray-500 text-sm">{alt[0]}</span>
      )}
    </div>
  );
}