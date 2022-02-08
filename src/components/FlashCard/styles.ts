import styled, { keyframes, css } from "styled-components";

interface FlashCardContainerProps {
  flip: boolean | undefined;
}

const flipUp = keyframes` 
0% {
   
  transform: rotateX(0);
}
100% {

  transform: rotateX(-180deg);
}
`;
const flipDown = keyframes` 
0% {
    
  transform: rotateX(180deg);
}
100% {

  transform: rotateX(-0);
}
`;

export const FlashCardContainer = styled.div<FlashCardContainerProps>`
  background-color: #0f1316;
  border-radius: 38px;
  height: 500px;
  animation: ${(props) =>
    props.flip
      ? css`
          ${flipUp} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
        `
      : css`
          ${flipDown} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
        `};
  position: relative;
  transform-style: preserve-3d;
`;

export const FlashCardQuestionTitle = styled.h1`
  color: #fff;
`;

export const FlashCardItemFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 25px;
`;

export const FlashCardItemBack = styled.div`
  transform: rotateX(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;\
  padding: 25px;
`;
