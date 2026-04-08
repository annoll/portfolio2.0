import Certificate from "./components/Certificate";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-140 md:shrink-0 md:sticky md:top-0 md:h-screen md:border-r border-black/10 md:overflow-y-auto">
        <Sidebar />
      </aside>

      <main className="flex-1 md:overflow-y-auto p-6 md:p-10">
        <Skill />
        <Project />
        <Certificate />
      </main>
    </div>
  );
}
