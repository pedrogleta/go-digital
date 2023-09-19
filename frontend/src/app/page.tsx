"use client";

import { Header } from "@/components/Header";
import { MainSection } from "@/components/MainSection";
import { Sidebar } from "@/components/Sidebar";

import { auth } from "@/lib/firebase-config";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  AppContainer,
  HeaderContainer,
  MainContainer,
  SidebarContainer,
} from "./styles";

export default function Page() {
  const router = useRouter();

  // useEffect(() => {
  //   if (!auth.currentUser) {
  //     router.push("/login");
  //   }
  // });

  return (
    <div id="main">
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <AppContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <MainContainer>
          <MainSection />
        </MainContainer>
      </AppContainer>
    </div>
  );
}
