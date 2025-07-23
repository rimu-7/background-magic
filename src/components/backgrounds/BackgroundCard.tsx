import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface Props {
  id: string;
  name: string;
  color: string;
  gradient: string;
  textColor: string;
  isSelected: boolean;
  copiedId: string | null;
  onSelect: (id: string) => void;
  onCopy: () => void;
}

export const BackgroundCard: React.FC<Props> = ({
  id,
  name,
  gradient,
  isSelected,
  copiedId,
  onSelect,
  onCopy,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localCopied, setLocalCopied] = useState(false);

  useEffect(() => {
    if (copiedId === id) {
      setLocalCopied(true);
      const timer = setTimeout(() => setLocalCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedId, id]);

  const handleSelect = () => onSelect(id);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy();
  };

  return (
    <motion.div
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-60 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out flex flex-col items-center justify-center group overflow-hidden ${
        isSelected ? "border-primary ring-2 ring-primary" : "  hover:ring-2"
      }`}
      style={{
        background: gradient,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundBlendMode: "overlay",
      }}
    >
      {/* Name badge like PatternCard */}
      <span
        className="px-3 py-1 rounded-md text-sm font-medium bg-black/30 text-white select-none z-10"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
      >
        {name}
      </span>

      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-black dark:bg-white rounded-full shadow-md z-10">
          <div className="w-4 h-4 rounded-full bg-primary-500" />
        </div>
      )}

      {/* Copy button */}
      <AnimatePresence>
        {(isHovered || isSelected) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopy}
              className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl backdrop-blur-md transition-all
                ${
                  localCopied
                    ? "bg-emerald-500/90 text-white"
                    : "bg-black/30 text-white hover:bg-black/40"
                }
              `}
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
    </motion.div>
  );
};
