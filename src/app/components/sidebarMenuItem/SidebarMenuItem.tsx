"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: JSX.Element;
  path: string;
  subtitle: string;
  title: string;
}

export const SidebarMenuItem = ({ title, subtitle, icon, path }: Props) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <Link
      href={path}
      className={`${pathname === path && "bg-blue-800"}
        w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div className="text-white">{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
