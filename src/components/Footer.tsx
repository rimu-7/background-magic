import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Footer = () => {
  return (
    <footer
      className={cn(
        "w-full backdrop-blur-xs dark:bg-black/20 bg-white/20 ",
        "fixed bottom-0 left-0 z-50" // Makes footer stick to bottom
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Background Magic. All rights reserved
            rimu-7
          </span>

          <Tooltip>
            <TooltipTrigger>
              {" "}
              <a
                href="https://github.com/rimu-7/background-magic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="inline-block mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                View on GitHub
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Full Code on GitHub</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
