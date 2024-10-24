"use client";

import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const config: IpadCursorConfig = {
    enableLighting: true,
    enableMouseDownEffect: true,
    normalStyle: {
      backdropBlur: "2",
      background: "#FFEBE533",
      radius: "10",
      border: "#FFEBE5" 
      
    },
    blockStyle: {
      
      radius: "20",
      border: "#FFEBE5" 

    },
    
    
  };
  useIPadCursor();
  return <IPadCursorProvider config={config}>{children}</IPadCursorProvider>;
}
