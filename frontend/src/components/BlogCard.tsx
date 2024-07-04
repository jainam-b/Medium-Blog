import React from "react";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b border-slate-200 pb-4 mt-5">
      <div className="flex ">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} />
        </div>
        <div className="font-extralight text-sm pl-2  flex justify-center flex-col">{authorName}</div>
        <div className="flex justify-center flex-col pl-2"><Circle/></div>
        <div className="pl-2 font-thin text-slate-500 text-sm  flex justify-center flex-col"> {publishedDate}</div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-md font-thin ">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-500 text-sm  pt-2">{`${Math.ceil(content.length / 100)} minute read`}</div>
    </div>
  );
};

export default BlogCard;

function Circle() {
  return <div className="w-1 h-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({ name }: { name: string }) {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    </div>
  );
}
