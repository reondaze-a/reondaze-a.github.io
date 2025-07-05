import Profile from "./Profile";
import Separator from "./Separator";
import Projects from "./Projects";

export default function Main() {
  return (
    <main className="flex w-full flex-col">
      <Profile />
      <Separator />
      <Projects />
    </main>
  );
}
