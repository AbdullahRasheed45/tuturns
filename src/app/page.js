import dynamic from "next/dynamic";

const ScrollToTop = dynamic(()=>import("./components/ScrollToTop/ScrollToTop"))
const HomePage = dynamic(()=>import("./components/HomePage/HomePage"))

export const metadata = {
  title: "TuTurns |  A Tutoring Solution",
  description:
    "TuTurns offers comprehensive tutoring services for O/A Level, GCSE, and IGCSE boards. Achieve academic success with our experienced tutors.",
};
export default function Home() {
  return (
    <>
      <ScrollToTop />
      <HomePage />
    </>
  );
}
