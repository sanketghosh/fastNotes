import { CloudLightningIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppSidebar() {
  return (
    <aside className="min-h-screen bg-secondary w-96 space-y-6 border-r relative hidden lg:block">
      <div className="space-y-3 py-2 sticky top-0 left-0 right-0 px-2 bg-secondary">
        <div className="h-14 flex items-center justify-between bg-emerald-500 rounded-md px-4">
          <div className="flex text-white items-center gap-1">
            <CloudLightningIcon size={24} />
            <h2 className="font-extrabold text-xl">fastNotes</h2>
          </div>
          <div className="bg-white size-10 flex items-center justify-center rounded-md">
            SG
          </div>
        </div>

        <Link
          to={"/add-new-note"}
          className="flex items-center border px-3 py-2 w-full rounded-md justify-center bg-background hover:bg-background/55 transition-all font-medium"
        >
          <PlusIcon />
          <h2>Create Note</h2>
        </Link>
      </div>

      <div className="space-y-4 pb-5 overflow-y-scroll px-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div
            className="p-3 rounded-md border bg-background hover:bg-background/55 cursor-pointer transition-all"
            key={item}
          >
            <h2 className="line-clamp-1 text-lg font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              culpa.
            </h2>
            <p className="line-clamp-2 leading-tight text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              vero assumenda dolore, laborum saepe exercitationem amet quasi
              cumque nostrum aspernatur?
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
