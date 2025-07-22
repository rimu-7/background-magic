// components/patterns/PatternDisplay.tsx
import React from 'react';
import type { Pattern } from './types';

interface PatternDisplayProps {
  pattern: Pattern | null;
  theme: string;
}

export const PatternDisplay = ({ pattern, theme }: PatternDisplayProps) => {
  if (!pattern) return null;

  return (
    <div className="p-6 rounded-lg bg-background border border-border">
      <h2 className="text-xl font-semibold mb-4">Content Area</h2>
      <p className="text-muted-foreground">
        The current pattern is: {pattern.name}
      </p>
      <div className="mt-4 p-4 rounded bg-foreground/5">
        <code className="text-sm">
          {theme === 'dark' ? pattern.darkStyle : pattern.lightStyle}
        </code>
      </div>
    </div>
  );
};