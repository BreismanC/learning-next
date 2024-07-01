import Image from "next/image";
import { SidebarMenuItem } from "../sidebarMenuItem/SidebarMenuItem";
import { IoBrowsersOutline, IoCalculatorOutline, IoLogoReact } from "react-icons/io5";

const menuItems = [
  {
    icon: <IoBrowsersOutline size={40} />,
    path: "/dashboard/main",
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    icon: <IoCalculatorOutline size={40} />,
    path: "/dashboard/counter",
    title: "Counter",
    subtitle: "Contador client side",
  }
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="w-[400px] bg-gray-900 min-h-screen z-10 text-slate-300 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact size={16} className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage yo1ur actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User_profile_image"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Breisman Chalaca
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map(item=>(
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
