import React from "react";
import { PageContainer } from "./styles";
import { NavBar } from "../NavBar";

interface PageLayoutProps {
  children?: any;
}

export function PageLayout(props: PageLayoutProps) {
  return (
    <PageContainer>
      <NavBar></NavBar>
      {props.children}
    </PageContainer>
  );
}
