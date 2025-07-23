import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowRight,
  BookText,
  Code,
  Copy,
  Eye,
  Flower,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ui/ThemeProvider";

const Home = () => {
  const { theme } = useTheme(); // If you're using a theme context/provider

  return (
    <div
      className="relative min-h-screen py-20 text-gray-900 dark:text-white transition-colors"
      style={{
        background: "linear-gradient(135deg, #764ba2 0%,  #100f1f 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay (Dark only) */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent pointer-events-none" />
      )}

      {/* Container */}
      <div className="max-w-4xl flex flex-col justify-center items-center mx-auto backdrop-blur-md bg-white/30 dark:bg-black/60 p-8 md:p-12 rounded-2xl shadow-xl text-foreground space-y-12 border border-white/20">
        {/* Banner */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.github.com/rimu-7/background-magic"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 max-w-md w-full rounded-full border border-cyan-400 bg-cyan-100/50 dark:bg-cyan-900/20 px-5 py-3 mb-12 transition hover:bg-cyan-200 dark:hover:bg-cyan-800/50 shadow-lg dark:shadow-cyan-800/40"
            >
              <span className="font-semibold text-cyan-700 dark:text-cyan-300 tracking-wide text-lg sm:text-xl">
                Feel Free to Contribute
              </span>
              <Flower
                size={22}
                className="text-red-600 group-hover:rotate-12 transition-transform"
              />
              <ArrowRight
                size={40}
                className="ml-auto text-cyan-600 dark:text-cyan-400 group-hover:translate-x-2 transition-transform"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contribute</p>
          </TooltipContent>
        </Tooltip>

        {/* Hero */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center tracking-tight leading-[1.1] max-w-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-300">
            Background Generator
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-center text-lg sm:text-xl  font-light tracking-wide leading-relaxed">
          Create beautiful radial gradient backgrounds with precision. Select,
          preview, and copy CSS code for your projects instantly.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
          {/* Feature 1 */}
          <div className="flex items-start gap-5 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md p-8 shadow-lg border border-cyan-400 dark:border-cyan-700 hover:shadow-cyan-400 dark:hover:shadow-cyan-600 transition-shadow cursor-default">
            <div className="flex items-center justify-center text-cyan-500 dark:text-white text-2xl ">
              <Copy size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Copy Code</h3>
              <p className="text-cyan-500 dark:text-cyan-200 text-base">
                Instantly copy clean, production-ready CSS or Tailwind code to
                your clipboard with one click.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md p-8 shadow-lg border border-red-400 dark:border-red-600 hover:shadow-red-400 dark:hover:shadow-red-500 transition-shadow cursor-default">
            <div className="flex items-center justify-center text-red-600 text-2xl">
              <Eye size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
              <p className="text-red-600 dark:text-red-300 text-base">
                See your selected background live and in full detail before
                copying or implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-4xl px-4">
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://github.com/rimu-7/background-magic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-700 transition rounded-xl text-white font-semibold shadow-lg shadow-cyan-600/50"
              >
                <Github size={24} />
                Contribute Here
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contribute</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                to="/docs"
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-700 transition rounded-xl text-white font-semibold shadow-lg shadow-cyan-600/50"
              >
                <BookText />
                Documentation
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Documentation</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-300 dark:border-cyan-700 w-full max-w-4xl my-16" />

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl w-full text-center text-cyan-500 dark:text-cyan-300 font-semibold">
          <div className="flex flex-col">
            <span className="text-4xl sm:text-5xl">100%</span>
            <span className="uppercase text-sm tracking-widest text-cyan-500 dark:text-cyan-400 mt-1">
              Free to use
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl sm:text-5xl">CSS</span>
            <span className="uppercase text-sm tracking-widest text-cyan-500 dark:text-cyan-400 mt-1">
              & TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
