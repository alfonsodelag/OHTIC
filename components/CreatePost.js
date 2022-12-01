import { useState, useRef } from "react";
import Image from "next/image";
import { SiGooglephotos } from "react-icons/si";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addPost } from "../public/src/app/features/postSlice";

const CreatePost = () => {
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [text, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;
    dispatch(addPost(text));
    inputRef.current.value = "";
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src="https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          alt="post"
          priority
        />
        <form className="flex flex-1">
          <input
            onChange={(event) => setInputText(event.target.value)}
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            ref={inputRef}
            placeholder="Post something"
          ></input>
          <button hidden onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>

        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer"
        >
          <SiGooglephotos size={20} className="text-green-500" />
          <p className="font-semibold text-gray-600">Photo</p>
        </div>
        <input type="file" hidden accept="image/*" ref={hiddenFileInput} />
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-yellow-500" />
          <p className="font-semibold text-gray-600">Feeling</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
