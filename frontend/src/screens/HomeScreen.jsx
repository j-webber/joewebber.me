import AboutMe from "../components/AboutMe";
import MainProjects from "../components/MainProjects";
import Pictures from "../components/Pictures";
import RecentArticles from "../components/RecentArticles";

export default function HomeScreen() {
  return (
    <>
      <AboutMe />
      <Pictures />
      <MainProjects />
      <RecentArticles />
    </>
  );
}
