import * as React from "react";

type MenuItem = {
  label: React.ReactNode;
  onClick?: () => void;
};

type ContextMenuProps = {
  items: MenuItem[];
  children: React.ReactNode;
  className?: string;
};

export function ContextMenu({ items, children, className = "" }: ContextMenuProps) {
  const [visible, setVisible] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  React.useEffect(() => {
    if (visible) {
      document.addEventListener("click", handleClose);
      return () => document.removeEventListener("click", handleClose);
    }
  }, [visible]);

  return (
    <div className={className} onContextMenu={handleContextMenu} style={{ display: "inline-block" }}>
      {children}
      {visible && (
        <ul
          className="absolute z-50 bg-white border rounded shadow-md py-1"
          style={{ left: pos.x, top: pos.y }}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                item.onClick?.();
                handleClose();
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}