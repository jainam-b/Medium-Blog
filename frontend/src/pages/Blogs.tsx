import React from "react";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";

const Blogs = () => {
  return (
    <div>
        <div>

        <AppBar/>
        </div>
      <div className="flex justify-center">
        <div className="   max-w-xl ">
          <BlogCard
            authorName={"Jainam"}
            title={
              "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing  "
            }
            content={
              "No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is the dream for man"
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Jainam"}
            title={
              "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing  "
            }
            content={
              "No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is the dream for man"
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Jainam"}
            title={
              "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing  "
            }
            content={
              "No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is the dream for man"
            }
            publishedDate={"2nd Feb 2024"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
