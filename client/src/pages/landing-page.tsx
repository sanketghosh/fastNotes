import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 min-h-screen">
        <nav className="justify-between h-14 flex items-center">
          <Link to={"/"} className="flex items-center gap-1">
            <ZapIcon />
            <p className="text-xl font-bold">fastNotes</p>
          </Link>

          <Link
            to={"/auth"}
            className={cn(
              buttonVariants({
                size: "sm",
              }),
            )}
          >
            Get Started
          </Link>
        </nav>

        <div className="h-[calc(100vh-56px)] flex items-center">
          <div className="space-y-7">
            <span className="border px-5 py-1 rounded-full select-none bg-secondary text-sm font-medium">
              We are proudly open sourced.
            </span>
            <h1 className="max-w-5xl text-4xl md:text-5xl lg:text-6xl font-bold">
              Simple,{" "}
              <span className="text-blue-600">quick and in browser</span> note
              taking made super easy.
            </h1>
            <p className="max-w-6xl text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem voluptatibus laborum repellat quibusdam asperiores
              nemo doloremque cupiditate? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sed, deserunt.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to={"/home"}
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "rounded-full",
                )}
              >
                Get Started
              </Link>
              <Button variant={"outline"} size={"lg"} className="rounded-full">
                Star Our Repository
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
