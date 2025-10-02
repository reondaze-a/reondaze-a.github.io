import Profile from "./Profile/Profile";
import Separator from "./Separator";
import Projects from "./Projects/Projects";


export default function Main() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8 space-y-16">
        <Profile />
        <Separator />
        <Projects />  
    </main>
  );
}
