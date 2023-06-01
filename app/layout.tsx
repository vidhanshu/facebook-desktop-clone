"use client";

import "./globals.css";

import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import Nav from "./components/navigation/Nav";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="flex justify-between bg-[#f1f3f5]">
          <LeftSidebar />
          {children}
          {!pathname.includes("profile") && <RightSidebar />}
        </main>
      </body>
    </html>
  );
}
