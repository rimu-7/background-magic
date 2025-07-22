import React from "react";
import { Copy, Check } from "lucide-react";
import type { BaseBackground } from "./types";

interface PatternGridProps {
  patterns: BaseBackground[];
  copiedId: string | null;
  onCopy: (pattern: BaseBackground) => void;
}

export const PatternGrid: React.FC<PatternGridProps> = ({
  patterns,
  copiedId,
  onCopy,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {patterns.map((pattern) => {
        const isCopied = copiedId === pattern.id;
        return (
          <div
            key={pattern.id}
            className="rounded-2xl shadow overflow-hidden cursor-pointer border border-gray-300 relative group"
            style={{
              background: `${pattern.pattern}, ${pattern.color}`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              aspectRatio: "1 / 1",
            }}
            onClick={() => onCopy(pattern)}
          >
            <div className="absolute bottom-2 left-2 text-sm font-medium text-white drop-shadow">
              {pattern.name}
            </div>
            <div className="absolute top-2 right-2">
              {isCopied ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <Copy className="w-5 h-5 text-white" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
