import { ReactNode } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface asideBtnProps {
  active: boolean;
  to: string;
  children: ReactNode;
}

export function AsideBtn({ active, to, children }: asideBtnProps) {
  return (
    <Link
      to={to}
      className={clsx(
        "w-full flex gap-2 items-center py-3 px-4 rounded text-gray-100 transition-all duration-200",
        {
          "bg-gray-800 ring-0": active === true,
          "hover:bg-gray-800 hover:translate-x-1": active === false,
        }
      )}
    >
      {children}
    </Link>
  );
}
