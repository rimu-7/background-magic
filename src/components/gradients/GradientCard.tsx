import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

interface Gradient {
  id: string;
  name: string;
  className: string;
}

interface GradientCardProps {
  gradient: Gradient;
  isSelected: boolean;
  onSelect: (id: string) => void;
  theme: string;
}

export const GradientCard = ({
  gradient,
  isSelected,
  onSelect,
}: GradientCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localCopied, setLocalCopied] = useState(false);

  const getComputedGradient = () => {
    const MAP: Record<string, string> = {
      "bg-gradient-to-r from-blue-500 to-purple-600":
        "linear-gradient(to right, #3b82f6, #8b5cf6)",
      "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500":
        "linear-gradient(to right, #ec4899, #ef4444, #f59e0b)",
      "bg-gradient-to-r from-green-400 to-lime-500":
        "linear-gradient(to right, #4ade80, #84cc16)",
      "bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500":
        "linear-gradient(to right, #6366f1, #0ea5e9, #3b82f6)",
      "bg-gradient-to-r from-cyan-400 to-teal-500":
        "linear-gradient(to right, #22d3ee, #14b8a6)",
      "bg-gradient-to-r from-white via-white to-gray-100":
        "linear-gradient(to right, #f3f4f6, #e5e7eb, #d1d5db)",
      "bg-gradient-to-r from-black via-black to-gray-800":
        "linear-gradient(to right, #1f2937, #374151, #4b5563)",
    };
    return (
      MAP[gradient.className] ||
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    );
  };

  const handleCopy = async () => {
    const code = `
<div className="min-h-screen w-full bg-white dark:bg-black relative">
  {/* Your Selected Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "${getComputedGradient()}",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
    }}
  />
  
  {/* Your content goes here */}
</div>`.trim();

    await navigator.clipboard.writeText(code);
    setLocalCopied(true);
    toast.success("Copied");
    setTimeout(() => setLocalCopied(false), 1500);
  };

  return (
    <div
      onClick={() => onSelect(gradient.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-60 rounded-lg border-2 cursor-pointer transition-all flex flex-col items-center justify-center group overflow-hidden ${
        isSelected
          ? "border-primary ring-2 ring-primary/50"
          : "border-border hover:border-primary/50"
      } ${gradient.className}`}
    >
      <span className="px-3 py-1 rounded-md text-sm font-medium bg-black/30 text-white">
        {gradient.name}
      </span>

      {isSelected && (
        <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-black dark:bg-white rounded-full shadow-md">
          <div className="w-4 h-4 rounded-full bg-primary-500" />
        </div>
      )}

      <AnimatePresence>
        {(isHovered || isSelected) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl backdrop-blur-md transition-all ${
                localCopied
                  ? "bg-emerald-500/90 text-white"
                  : "bg-black/30 text-white hover:bg-black/40"
              }`}
            >
              {localCopied ? (
                <>
                  <Check size={16} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Code</span>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
