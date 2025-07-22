// components/textures/TextureCard.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { toast } from "react-toastify";
import type { Texture } from "./types";

interface TextureCardProps {
  texture: Texture;
  isSelected: boolean;
  onSelect: (id: string) => void;
  theme: string;
}

export const TextureCard = ({
  texture,
  isSelected,
  onSelect,
  theme,
}: TextureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localCopied, setLocalCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const isDark = theme === "dark";

    const css = `
<div className="min-h-screen w-full bg-white dark:bg-black relative">
  {/* ${texture.name} Texture */}
  <div
    className="absolute inset-0 z-0"
    style={{
      ${isDark ? texture.darkStyle : texture.lightStyle}
    }}
  />
  {/* Your Content/Components */}
</div>
    `.trim();

    try {
      await navigator.clipboard.writeText(css);
      toast.success("Texture CSS copied to clipboard!");
      setLocalCopied(true);
      setTimeout(() => setLocalCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div
      onClick={() => onSelect(texture.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-60 rounded-lg border-2 cursor-pointer transition-all flex flex-col items-center justify-center group overflow-hidden ${
        isSelected
          ? "border-primary ring-2 ring-primary/50"
          : "border-border hover:border-primary/50"
      } ${theme === "dark" ? texture.darkClasses : texture.lightClasses}`}
    >
      <span className="px-3 py-1 rounded-md text-sm font-medium bg-black/30 text-white backdrop-blur-sm">
        {texture.name}
        <span className="text-xs opacity-80 ml-1 capitalize">({texture.category})</span>
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
              onClick={handleCopy}
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