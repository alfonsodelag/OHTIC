import { useSelector } from "react-redux";
import { selectPost } from "../public/src/app/features/postSlice";
import Post from "./Post";

const Posts = () => {
  const posts = useSelector(selectPost);

  return (
    <div className="rounded-md shadow-md">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
