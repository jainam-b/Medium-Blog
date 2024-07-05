// this page is used to display the blog with some css and 
import React from "react";
import { useBlog, useBlogs } from "../hooks";
import { useParams } from "react-router-dom";
import FullBlog  from "../components/FullBlog";
 

 
const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
});


  if (loading) {
    return <div>Loading ...</div>;
  }
  return <div>
    <FullBlog blog={blog} />
  </div>;
};

export default Blog;
