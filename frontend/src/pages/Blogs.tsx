import React from "react";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center">
        <div className="   max-w-xl ">
        {blogs.map(blog => <BlogCard
                   
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
