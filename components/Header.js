import { useSelector } from "react-redux";
import { userName } from "../public/src/app/features/formSlice";
import Image from "next/image";
import { AiOutlineForm } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import { BsChatRightText } from "react-icons/bs";
import { AiFillHome, AiFillBell } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";
import Link from "next/link";

const Header = () => {
  const user = useSelector(userName);

  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      <div className="flex min-w-fit">
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full text-gray-500">
          <Link href="/">
            <AiFillHome className="mx-auto cursor-pointer" size={25} />
          </Link>
        </div>
      </div>
      <div className="flex flex-grow justify-around md:justify-center mx-2">
        <Link
          className="flex items-center h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"
          href="/weather"
        >
          <TiWeatherCloudy className="mx-auto cursor-pointer" size={25} />
        </Link>
        <Link
          className="flex items-center h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"
          href="/userform"
        >
          <AiOutlineForm className="mx-auto cursor-pointer" size={25} />
        </Link>
        <Link
          className="flex items-center h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer"
          href="/chat"
        >
          <BsChatRightText className="mx-auto cursor-pointer" size={25} />
        </Link>
      </div>
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          src="https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          alt="signOut"
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {user}
        </p>
        <CgMenuGridO
          size={20}
          className="lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className="lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className="lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
