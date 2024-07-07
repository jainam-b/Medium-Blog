// this page is used to display the blog with some css and
 
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import Spinner from "../components/Spinner";
import AppBar from "../components/AppBar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog ) {
    return (
      <div> <AppBar/>
      <div className="flex justify-center flex-col h-screen ">
        <div className="flex justify-center">
         <div><Spinner/></div>
        </div>
      </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
