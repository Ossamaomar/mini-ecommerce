import { Outlet } from "react-router";
import NavMenu from "./navbar/NavMenu";

export default function AppLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <NavMenu />
      <div className="!px-2 sm:!px-4 md:!px-8 lg:!px-20 mt-6 grow">
        <Outlet />
      </div>
    </div>
  );
}
