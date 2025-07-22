import React from "react";
import { useBackgroundTheme } from "./useBackgroundTheme";
import { BackgroundCard } from "./BackgroundCard";

export type BaseBackground = {
  id: string;
  name: string;
  textColor?: string;
} & (
  | { type: "color"; color: string }
  | { type: "pattern"; pattern: string; color: string }
);

interface Props {
  backgrounds: BaseBackground[];
  selectedId: string;
  copiedId: string | null;
  onSelect: (id: string) => void;
  onCopy: (bg: BaseBackground) => void;
}

export const BackgroundGrid: React.FC<Props> = ({
  backgrounds,
  selectedId,
  copiedId,
  onSelect,
  onCopy,
}) => {
  const { getGradient, currentTheme } = useBackgroundTheme();

  const getBackgroundStyle = (bg: BaseBackground) => {
    if (bg.type === "color") {
      return getGradient(bg.color);
    } else {
      return `${bg.pattern}, ${getGradient(bg.color)}`;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {backgrounds.map((bg) => {
        const gradient = getBackgroundStyle(bg);
        const isSelected = selectedId === bg.id;
        const textColor =
          bg.textColor || (currentTheme === "dark" ? "#ffffff" : "#000000");

        return (
          <BackgroundCard
            key={bg.id}
            id={bg.id}
            name={bg.name}
            color={bg.color}
            gradient={gradient}
            textColor={textColor}
            isSelected={isSelected}
            copiedId={copiedId}
            onSelect={onSelect}
            onCopy={() => onCopy(bg)}
          />
        );
      })}
    </div>
  );
};
