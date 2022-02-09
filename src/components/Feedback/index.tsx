import { useState } from "react";
import { FeedbackContainer, FeedBackItem } from "./styles";

export function Feedback() {
  return (
    <FeedbackContainer>
      <FeedBackItem>1</FeedBackItem>
      <FeedBackItem>2</FeedBackItem>
      <FeedBackItem>3</FeedBackItem>
      <FeedBackItem>4</FeedBackItem>
      <FeedBackItem>5</FeedBackItem>
    </FeedbackContainer>
  );
}
