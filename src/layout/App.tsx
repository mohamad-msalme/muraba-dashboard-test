import { Outlet } from "react-router-dom";
import { NavBar } from ".";

export const App: React.FC = () => (
  <div className=" flex min-h-screen bg-gray-200">
    <NavBar />
    <main className="flex-1 flex flex-col gap-4">
      <Outlet />
    </main>
  </div>
);

export default App;
