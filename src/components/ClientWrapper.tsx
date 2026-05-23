"use client";

// This component is unused - layout.tsx already provides these components
// Keeping it for reference but it should not be used

import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  // This wrapper is redundant - use layout.tsx instead
  return <>{children}</>;
}
