"use client";

import { Header } from "@/components/Header";
import { MainSection } from "@/components/MainSection";
import { Sidebar } from "@/components/Sidebar";

import { auth } from "@/lib/firebase-config";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/login");
    }
  });

  return (
    <div
      id="main"
      className="grid grid-cols-2 grid-rows-[60px_minmax(1px,_1fr)0.75rem] overflow-auto h-screen"
    >
      <div className="max-h-16 flex col-span-3">
        <Header />
      </div>
      <div className="col-span-1 mx-3 min-w-max max-w-max left-0 row-auto col-end-1">
        <Sidebar />
      </div>
      <div className="mr-3 col-start-1 col-end-4 h-full">
        <MainSection />
      </div>
    </div>
  );
}
