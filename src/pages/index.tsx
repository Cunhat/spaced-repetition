import type { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";
import { PageTitle } from "../styles/cardsOftheDay";
import { FlashCard } from "../components/FlashCard";
import { FlashCardQuestion } from "../components/FlashCard/FlashCardQuestion";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <PageTitle>Cards of the day</PageTitle>
      <FlashCard
        questionComponent={<FlashCardQuestion title={"What is React?"} />}
        answerComponent={<FlashCardQuestion title={"Is a JS framework?"} />}
      />
    </PageLayout>
  );
};

export default Home;
