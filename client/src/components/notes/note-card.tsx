import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

type NoteCardProps = {
  href: string;
  title: string;
  desc: string;
  isStarred: boolean;
};

export default function NoteCard({
  href,
  title,
  desc,
  isStarred,
}: NoteCardProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={cn(
            "relative my-3 cursor-pointer rounded-md border bg-secondary/30 p-0 transition-all hover:border-primary/60 hover:bg-primary/15",
          )}
        >
          {isStarred && (
            <StarIcon className="absolute right-3 top-3 size-4 fill-yellow-500 stroke-yellow-500" />
          )}
          <Link to={`/note/${href}`}>
            <div className="space-y-2 p-3">
              <h2 className="line-clamp-1 text-lg font-medium">{title}</h2>
              <p className="line-clamp-2 leading-tight text-muted-foreground">
                {desc}
              </p>
            </div>
          </Link>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
