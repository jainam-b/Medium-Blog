import React from "react";
import AppBar from "./AppBar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full   pt-12 max-w-screen-2xl  ">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="pt-3 text-slate-500">Post no 2nd December 2024</div>
            <div className="pt-3 text-xl">{blog.content}</div>
          </div>
          <div className="col-span-4 pl-6 ">
            <div> Author </div>
            <div className="flex w-full ">
              <div className="p-2 flex flex-col justify-center">
                <BlogAvatar name={blog.author.name || "Anonymous"} />
              </div>
              <div className="text-2xl font-bold">{blog.author.name} </div></div>
              <div className="w-72 pt-2">
                Master of mirth, purveyor of puns, and the funniest person in
                the kingdom.{" "}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;


export function BlogAvatar({ name }: { name: string }) {
  return (
    <div>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {name[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
