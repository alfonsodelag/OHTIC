import Image from "next/image";
import { ImUsers } from "react-icons/im";
import SidebarItem from "./SidebarItem";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { userName } from "../public/src/app/features/formSlice";

const Sidebar = () => {
  const user = useSelector(userName);

  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:max-w-1/4">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={40}
          width={40}
          alt="sidebar"
          priority
        />
        <p className="hidden sm:inline-flex font-medium">{user}</p>
      </div>
      <SidebarItem Icon={ImUsers} value="Contacts" />
      <SidebarItem Icon={MdGroups} value="Meetings" />
      <SidebarItem Icon={AiOutlineShop} value="Stores" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Videos" />
      <SidebarItem Icon={BsStopwatch} value="Time" />
      <SidebarItem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  );
};

export default Sidebar;
