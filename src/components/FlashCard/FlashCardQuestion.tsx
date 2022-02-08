import { FlashCardQuestionTitle } from "./styles";

interface FlashCardQuestionProps {
  title: string;
}

export function FlashCardQuestion(props: FlashCardQuestionProps) {
  return <FlashCardQuestionTitle>{props.title}</FlashCardQuestionTitle>;
}
