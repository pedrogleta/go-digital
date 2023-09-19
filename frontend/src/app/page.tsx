"use client";

import { Header } from "@/components/Header";
import { MainSection } from "@/components/MainSection";
import { Sidebar } from "@/components/Sidebar";

import { auth } from "@/lib/firebase-config";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  // useEffect(() => {
  //   if (!auth.currentUser) {
  //     router.push("/login");
  //   }
  // });

  return (
    <div id="main">
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <MainSection />
      </div>
    </div>
  );
}
