"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MEMBERS_DB } from "@/lib/members";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage session
    const currentUser = localStorage.getItem("bkl_current_user");

    if (!currentUser) {
      router.push("/login");
      return;
    }

    // Validate against database
    const normalizedCurrent = currentUser.trim().toLowerCase();
    const currentMember = MEMBERS_DB.find((m) => m.username.toLowerCase() === normalizedCurrent);

    if (!currentMember) {
      localStorage.removeItem("bkl_current_user");
      router.push("/login");
      return;
    }

    // Extract requested member name from path
    // Pathname looks like: "/member/raju"
    const parts = pathname.split("/");
    const requestedUser = parts[2]; // Index 2 contains the username cname

    if (!requestedUser) {
      // If directly accessing "/member" or "/member/", redirect to their own route
      router.push(currentMember.route);
      return;
    }

    const normalizedRequested = requestedUser.trim().toLowerCase();

    // Check if current user is authorized to access the requested route
    if (normalizedCurrent !== normalizedRequested) {
      // If mismatch, automatically redirect to the logged-in user's correct page
      router.push(currentMember.route);
      return;
    }

    setIsAuthenticated(true);
  }, [router, pathname]);

  const handleLogout = () => {
    localStorage.removeItem("bkl_current_user");
    setIsAuthenticated(false);
    router.push("/login");
  };

  // Show a clean loading state to prevent flash of protected content
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-neutral-500 font-mono text-xs uppercase tracking-widest">
        <div className="flex flex-col items-center gap-3">
          <span className="w-5 h-5 border-2 border-t-transparent border-neutral-500 rounded-full animate-spin" />
          <p>Verifying Credentials...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* GLOBAL PERSISTENT FLOATING LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white font-mono text-[9px] tracking-widest font-black uppercase border border-white/10 hover:border-white/20 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md cursor-pointer hover:scale-105 select-none"
        title="Logout of session"
      >
        🔒 LOGOUT
      </button>
      {children}
    </>
  );
}
