 
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import BlogSketon from "../components/BlogSketon";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      <div>
        <AppBar/>
      </div>
      <div className="flex justify-center mt-5">
          <div>
          <BlogSketon />
            <BlogSketon />
            <BlogSketon />
          </div>
      </div>
      </div>      
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center mt-5">
        <div >
        {blogs.map(blog => <BlogCard
                   id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
