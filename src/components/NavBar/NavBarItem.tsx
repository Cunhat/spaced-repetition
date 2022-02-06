import React from "react";
import { NavBarListItem } from "./styles";
import Link from "next/link";

interface NavBarItemProps {
  path: string;
  title: string;
  shifted?: boolean;
}

export function NavBarItem(props: NavBarItemProps) {
  return (
    <NavBarListItem shifted>
      <Link href={props.path}>
        <a>{props.title}</a>
      </Link>
    </NavBarListItem>
  );
}
