import FadeUp from "./components/animations/FadeUp";
import Certificate from "./components/Certificate";
import EducationPage from "./components/EducationPage";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Side: Certificates */}
          <div>
            <Certificate />
          </div>

          {/* Right Side: Education */}
          <div>
            <EducationPage />
          </div>
        </div>
      </main>
    </div>
  );
}
