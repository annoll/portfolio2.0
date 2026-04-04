import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-140 shrink-0 top-0 sticky border">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto">
        <h1>Projects</h1>
      </main>
    </div>
  );
}
