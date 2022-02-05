import styled from "styled-components";

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
  color: #fff;
  margin-left: ${(props) => (props.shifted ? "auto" : "")};
  font-family: "SourcceSans Ligth";

  :hover {
    font-family: "SourcceSans Bold";
  }
`;
