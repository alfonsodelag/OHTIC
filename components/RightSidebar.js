import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const namesAndImages = [
  {
    id: 1,
    userName: "Pedro Ramirez",
    src: "https://images.pexels.com/photos/13351970/pexels-photo-13351970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Online",
  },

  {
    id: 2,
    userName: "Agustin Romero",
    src: "https://images.pexels.com/photos/5865466/pexels-photo-5865466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Offline",
  },
  {
    id: 3,
    userName: "Claudio Gómez",
    src: "https://images.pexels.com/photos/9111048/pexels-photo-9111048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Online",
  },
];

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      {namesAndImages.map((object) => (
        <Contacts
          key={object.id}
          name={object.userName}
          src={object.src}
          status={object.status}
        />
      ))}
    </div>
  );
};

export default RightSidebar;
