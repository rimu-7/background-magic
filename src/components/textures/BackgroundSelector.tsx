// components/backgrounds/BackgroundSelector.tsx
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/Tabs";
import { PatternSelector } from "../patterns/PatternSelector";
import { TextureSelector } from "../textures/TextureSelector";

export const BackgroundSelector = () => {
  const [activeTab, setActiveTab] = useState("patterns");

  return (
    <div className="w-full">
      <Tabs defaultValue="patterns" onValueChange={setActiveTab}>
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
          <div className="max-w-6xl mx-auto px-4">
            <TabsList className="grid w-full grid-cols-1 max-w-xs mx-auto my-4">
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
              <TabsTrigger value="textures">Textures</TabsTrigger>
            </TabsList>
          </div>
        </div>
        
        <TabsContent value="patterns">
          <PatternSelector />
        </TabsContent>
        <TabsContent value="textures">
          <TextureSelector />
        </TabsContent>
      </Tabs>
    </div>
  );
};