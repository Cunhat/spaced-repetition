import React from "react";
import { PageContainer, PageChildrenContainer } from "./styles";
import { NavBar } from "../NavBar";

interface PageLayoutProps {
  children?: any;
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <PageContainer>
      <NavBar></NavBar>
      <PageChildrenContainer>{props.children}</PageChildrenContainer>
    </PageContainer>
  );
}
