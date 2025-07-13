import * as React from "react";

type CarouselProps = {
  items: React.ReactNode[];
  className?: string;
};

export function Carousel({ items, className = "" }: CarouselProps) {
  const [current, setCurrent] = React.useState(0);

  function prev() {
    setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden rounded-lg">
        {items.length > 0 && (
          <div className="w-full h-full flex items-center justify-center">
            {items[current]}
          </div>
        )}
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 px-2 py-1 rounded"
      >
        ▶
      </button>
    </div>
  );
}