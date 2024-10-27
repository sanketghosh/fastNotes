import { cn } from "@/lib/utils";
import { ZapIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type AppMainLinkProps = {
  href: string;
  iconSize?: string;
  textSize?: string;
} & React.ComponentPropsWithRef<"a">;

export default function AppMainLink({
  href,
  iconSize,
  textSize,
  className,
}: AppMainLinkProps) {
  return (
    <Link to={`/${href}`} className={cn(className, "flex items-center gap-1")}>
      <ZapIcon className={cn(iconSize, "size-6")} />
      <p className={cn(textSize, "font-semibold")}>fastNotes</p>
    </Link>
  );
}
