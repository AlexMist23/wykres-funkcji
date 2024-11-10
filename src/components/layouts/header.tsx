"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeButton from "@/components/theme-button";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav-links";
import AMLogo from "../icons/am-logo";
import UserButton from "../auth/user-button";
import { SessionProvider } from "next-auth/react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const pathname = usePathname();
  return (
    <header
      className={cn("w-full bg-background/80  border-b shadow-sm rounded-t-xl")}
    >
      <div className="flex items-center h-16 gap-6 px-4 mx-auto text-sm max-w-[1900]">
        <HeaderDropDownTrigger
          className={isMobile ? "" : "hidden"}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Link
          href={"/"}
          className="flex gap-2 justify-center align-middle text-2xl font-bold"
        >
          <AMLogo className={"size-8 self-center"} />
          <span className="flex items-center ">Template</span>
        </Link>
        <nav className={cn("flex gap-4", isMobile ? "hidden" : "")}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "",
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <ThemeButton />
          <SessionProvider>
            <UserButton />
          </SessionProvider>
        </div>
      </div>
      <HeaderDropDown className={isMenuOpen && isMobile ? "flex" : "hidden"} />
    </header>
  );
}

export function HeaderDropDown({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "absolute w-full bg-background/90 backdrop-blur-sm flex flex-col gap-2 border-[1px] shadow-sm p-2",
        className
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-foreground p-3 rounded-md",
            pathname === link.href
              ? "bg-muted cursor-default"
              : "hover:bg-muted"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function HeaderDropDownTrigger({
  className,
  isMenuOpen,
  setIsMenuOpen,
}: {
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Button
        className={cn("w-9 h-9", className)}
        variant="outline"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className={cn("h-6 w-6 transition-transform", {
            "transform rotate-180": isMenuOpen,
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </>
  );
}
