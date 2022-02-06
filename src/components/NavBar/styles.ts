import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const NavBarContainer = styled.div`
  height: 76px;
  padding: 20px 30px;
`;

export const NavBarList = styled.ul`
  display: flex;
  gap: 40px;
`;

interface NavBarItemProps {
  shifted?: boolean;
}

export const NavBarListItem = styled.li<NavBarItemProps>`
  margin-left: ${(props) => (props.shifted ? "auto" : "")};
  font-family: "SourcceSans Regular";
  list-style: none;
  display: inline;

  a {
    text-decoration: none;
    color: #fff;

    :hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export const Trigger = styled(DropdownMenu.Trigger)`
  border: none;
  background-color: transparent;
  font-family: "SourcceSans Regular";
  outline: none;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  background-color: rgba(21, 23, 24, 1);
  margin: 20px;
  border-radius: 5px;
  padding: 5px;
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  color: #fff;
  padding: 20px;

  margin: 5px;
  outline: none;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    border: none;
    background-color: #9283ed;
  }
`;
