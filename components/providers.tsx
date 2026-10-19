"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ActiveSectionContextProvider from "@/context/active-section-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
