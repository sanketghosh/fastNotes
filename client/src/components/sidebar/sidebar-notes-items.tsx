import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type SidebarNotesItemProps = {
  pathName: string;
};

export default function SidebarNotesItems({ pathName }: SidebarNotesItemProps) {
  return (
    <div
      className={cn(
        "w-full border-r md:w-[350px] lg:w-[400px] top-0 z-10 fixed left-0 lg:left-[60px] bg-background",
        pathName !== "/home" && "hidden md:block",
      )}
    >
      <div className="bg-background top-0 sticky z-10">
        <div className="h-14 flex items-center px-2 border-b">
          <h2 className="font-bold text-xl">fastNotes</h2>
        </div>
        <div className="px-2 py-2 h-14 flex items-center border-b">
          <Input placeholder="Search notes. Ctrl + '/' to focus." />
        </div>
      </div>
      <div className="px-2 py-2 space-y-4 overflow-y-scroll h-[calc(100vh-112px)]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
          <div
            className="transition-all bg-secondary/30 rounded-md hover:border-blue-600/60 hover:bg-blue-600/15 cursor-pointer p-0 border"
            key={i}
          >
            <Link to={`/note/${i}`}>
              <div className="p-3">
                <h2 className="text-lg font-medium">This is a title</h2>
                <p className="line-clamp-2 text-muted-foreground leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus libero laborum hic suscipit magnam atque ducimus
                  omnis soluta in accusantium, deserunt nulla placeat doloribus
                  id commodi aut. Vitae, aliquid incidunt?
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
