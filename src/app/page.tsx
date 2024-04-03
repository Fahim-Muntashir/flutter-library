import Sidebar from "./components/Shared/Sidebar";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <Sidebar></Sidebar>
      <Main></Main>
    </main>
  );
}
