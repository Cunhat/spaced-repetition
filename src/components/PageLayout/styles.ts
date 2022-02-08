import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("hero-background.webp");
  background-repeat: no-repeat;
  background-size: calc(max(100%, 1800px));
  background-position: top;
  background-color: #000;
  height: 100vh;
  box-sizing: border-box;
  padding: 0px 20px;
  overflow: auto;
  color: #fff;
`;

export const PageChildrenContainer = styled.div`
  margin-top: 25px;
`;
