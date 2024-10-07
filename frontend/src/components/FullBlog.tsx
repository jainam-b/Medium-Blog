import AppBar from "./AppBar";
import { Blog } from "../hooks";

import React from "react";

const renderBlock = (block: any) => {
  switch (block.type) {
    case "paragraph":
      return <p key={block.id} className="text-lg">{block.data.text}</p>;
    case "header":
      return React.createElement(`h${block.data.level}`, { key: block.id, className: `text-${block.data.level}xl font-bold` }, block.data.text);
    case "list":
      return (
        <ul key={block.id} className="list-disc pl-5">
          {block.data.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    // Add more cases for other block types like 'image', 'code', etc.
    default:
      return null;
  }
};

const FullBlog = ({ blog }: { blog: Blog }) => {
  const content = JSON.parse(blog.content);

  return (
    <div>
      <AppBar />
      <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="pt-3 text-slate-500">Posted on 2nd December 2024</div>
            <div className="pt-3 text-xl">
              {content.blocks.map((block: any) => renderBlock(block))}
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                {/* <Avatar size="big" name={blog.author.name || "Anonymous"} /> */}
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catchphrase about the author's ability to grab the
                  user's attention.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
