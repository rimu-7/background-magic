import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ThemeToggle from "./ui/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const navLinks = [
  { path: "/", label: "Home" },
  { path: "/docs", label: "Docs" },
  { path: "/gradients", label: "Gradients" },
  { path: "/patterns", label: "Patterns" },
  { path: "/textures", label: "Textures" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setVisible(lastScrollY > currentY || currentY < 10);
          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-3xl transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" aria-label="Homepage">
            <Button variant="ghost" className="text-xl font-semibold">
              Background Magic
            </Button>
          </Link>
        </div>

        {/* Center: Nav Links (desktop only) */}
        <ul className="hidden sm:flex items-center gap-6 font-medium text-sm">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={cn(
                    "transition  ",
                    isActive &&
                      " border-b-3 border-primary  font-semibold",
                    !isActive && " hover:text-muted-foreground dark:hover:text-muted-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Tooltip>
                    <TooltipTrigger> {label}</TooltipTrigger>
                    <TooltipContent>
                      <p> {label}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: GitHub, LinkedIn & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className=" focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              >
                <a
                  href="https://github.com/rimu-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow me on GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Button
                size="icon"
                variant="ghost"
                asChild
                className=" focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              >
                <a
                  href="https://www.linkedin.com/in/mutasim-fuad-rimu-36a4a8260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow me on LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-md hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "sm:hidden bg-background/95 backdrop-blur-md border-t border-muted-foreground/20 transition-max-height duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-4 py-4 px-6 font-medium text-base">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={cn(
                    "block w-full transition  focus:outline-none focus:ring-2 focus:ring-primary rounded py-1",
                    isActive && " font-semibold"
                  )}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="flex gap-4 pt-4 border-t border-muted-foreground/20">
            <a
              href="https://github.com/rimu-7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2  transition"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mutasim-fuad-rimu-36a4a8260/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2  transition"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
