import React from "react";
import {
  NavBarContainer,
  NavBarList,
  NavBarListItem,
  Trigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./styles";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavBarItem } from "./NavBarItem";

export function NavBar() {
  return (
    <NavBarContainer>
      <NavBarList>
        <NavBarItem title={"Cards of the day"} path={"/"} shifted />
        <NavBarListItem>
          <DropdownMenu.Root>
            <Trigger>Flashcards</Trigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <NavBarItem title={"My fash cards"} path={"/MyCards"} />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavBarItem title={"Create new flash card"} path={"/"} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu.Root>
        </NavBarListItem>
      </NavBarList>
    </NavBarContainer>
  );
}
