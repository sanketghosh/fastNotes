import AppMainLink from "@/components/common/app-main-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="w-full">
      <div className="mx-auto min-h-screen max-w-7xl px-4">
        <nav className="flex h-14 items-center justify-between">
          <AppMainLink href="/" iconSize="size-7" textSize="text-xl" />

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

        <div className="flex h-[calc(100vh-56px)] items-center">
          <div className="space-y-7">
            <span className="select-none rounded-full border bg-secondary px-5 py-1 text-sm font-medium">
              We are proudly open sourced.
            </span>
            <h1 className="max-w-5xl text-4xl font-bold md:text-5xl lg:text-6xl">
              Simple, <span className="text-primary">quick and in browser</span>{" "}
              note taking made super easy.
            </h1>
            <p className="max-w-6xl text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem voluptatibus laborum repellat quibusdam asperiores
              nemo doloremque cupiditate? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sed, deserunt.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to={"/auth"}
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
