import React from "react";
import { NavBarContainer, NavBarList, NavBarListItem } from "./styles";

export function NavBar() {
  return (
    <NavBarContainer>
      <NavBarList>
        <NavBarListItem>ICON</NavBarListItem>
        <NavBarListItem shifted>Cards of the day</NavBarListItem>
        <NavBarListItem>My Cards</NavBarListItem>
      </NavBarList>
    </NavBarContainer>
  );
}
