import { useState } from "react";
import {
  FlashCardContainer,
  FlashCardInner,
  FlashCardItemFront,
  FlashCardItemBack,
} from "./styles";

interface FlashCardProps {
  questionComponent: any;
  answerComponent: any;
}

export function FlashCard(props: FlashCardProps) {
  const [flip, setFlip] = useState<boolean | undefined>(undefined);

  function handleFlip() {
    setFlip(!flip);
  }

  return (
    <FlashCardContainer onClick={handleFlip} flip={flip}>
      <FlashCardItemFront>{props.questionComponent}</FlashCardItemFront>
      <FlashCardItemBack>{props.answerComponent}</FlashCardItemBack>
    </FlashCardContainer>
  );
}
