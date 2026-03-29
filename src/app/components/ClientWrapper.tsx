"use client";

import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import SmoothScroll from "./SmoothScroll";
import Footer from "./Footer";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <SmoothScroll>{children}</SmoothScroll>
      <Footer />
    </>
  );
}
