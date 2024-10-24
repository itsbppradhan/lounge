"use client";

import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import { useEffect, useState } from "react";
import type { IpadCursorConfig } from "ipad-cursor";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to avoid SSR issues

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set based on screen width
    };

    // Check screen size on mount
    handleResize();

    // Add event listener to update on resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const config: IpadCursorConfig = {
    enableLighting: true,
    enableMouseDownEffect: true,
    normalStyle: {
      backdropBlur: "2",
      background: "#FFEBE533",
      radius: "10",
      border: "#FFEBE5",
    },
    blockStyle: {
      radius: "20",
      border: "#FFEBE5",
    },
  };

  // If mobile, return children directly without applying the cursor
  if (isMobile) {
    return <>{children}</>;
  }

  // Disable eslint rule for this line
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useIPadCursor();

  return <IPadCursorProvider config={config}>{children}</IPadCursorProvider>;
}
