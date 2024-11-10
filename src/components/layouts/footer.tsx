import AMLogo from "@/components/icons/am-logo";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-6 mt-auto border-t-2 border-muted">
      <div className="flex flex-col items-center gap-4 mx-auto text-sm xl:container text-foreground/50">
        <div className="flex items-center gap-4">
          <a
            href={`https://github.com/AlexMist23/${process.env.PROJECT_NAME}`}
            className="flex items-center gap-1 hover:text-foreground/80"
          >
            <Github />
            <p>{process.env.PROJECT_NAME}</p>
          </a>
        </div>
        <div className="flex items-center gap-4 pt-4 border-t-2 border-muted/50">
          <a
            href="https://misterkiewicz-aleksander.vercel.app/"
            className="flex items-center gap-2 hover:text-foreground/80"
          >
            <AMLogo className="w-5 h-5 text-foreground" />
            <p>© {new Date().getFullYear()} Aleksander Misterkiewicz</p>
          </a>

          <a
            href="https://github.com/AlexMist23"
            className="flex items-center gap-1 hover:text-foreground/80"
          >
            <Github />
            <p className="hidden sm:block">linkedin.com/in/aleksandermst</p>
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandermst/"
            className="flex items-center gap-1 hover:text-foreground/80"
          >
            <Linkedin />
            <p className="hidden sm:block">github.com/AlexMist23</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
