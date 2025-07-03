import McqPage from "./_McqPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Game Page',
  description: 'This is the main game page for PharmaQuest.'
}

const Page = () => {
  return (
    <McqPage />
  )
};

export default Page;
