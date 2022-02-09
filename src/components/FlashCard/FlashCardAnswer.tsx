import { FlashCardAnswerText } from "./styles";

interface FlashCardAnswerProps {
  text: string;
}

export function FlashCardAnswer(props: FlashCardAnswerProps) {
  return <FlashCardAnswerText>{props.text}</FlashCardAnswerText>;
}
