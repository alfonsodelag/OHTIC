import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center">
          <img
            className="rounded-full w-10 h-10"
            src="https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div>
            <p className="font-medium ml-2">Alfonso De La Guardia</p>
          </div>
        </div>
        <p className="py-4">{post}</p>

        <div className="flex">
          <div className="flex items-center space-x-1 hover:bg-gray-100  flex-grow justify-center p-2 rounded-xl cursor-pointer">
            <FiThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-100  flex-grow justify-center p-2 rounded-xl cursor-pointer">
            <FaRegCommentAlt className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-100  flex-grow justify-center p-2 rounded-xl cursor-pointer">
            <RiShareForwardLine className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
