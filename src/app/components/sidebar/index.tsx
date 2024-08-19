import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  House,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from "lucide-react";

import { InputControl, InputPrefix, InputRoot } from "../input";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import { Profile } from "./profile";
import { UsedSpaceWidget } from "./used-space-widget";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search size={20} className="text-zinc-500" />
        </InputPrefix>

        <InputControl placeholder="Search" />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={House} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}
