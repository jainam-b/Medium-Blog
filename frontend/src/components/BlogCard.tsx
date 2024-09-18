import { Link } from "react-router-dom";

// BlogCardProps Interface
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string; // This is the Editor.js content (JSON string)
  publishedDate: string;
  id: number;
}

// Helper function to parse the content and generate a snippet
const getContentSnippet = (contentJson: string, snippetLength: number = 100) => {
  try {
    const content = JSON.parse(contentJson);
    let textSnippet = "";

    // Loop through the blocks and concatenate text from paragraphs and headers
    content.blocks.forEach((block: any) => {
      if (block.type === "paragraph" || block.type === "header") {
        textSnippet += block.data.text + " ";
      }
      if (textSnippet.length >= snippetLength) {
        textSnippet = textSnippet.slice(0, snippetLength);
        return;
      }
    });

    return textSnippet.length > snippetLength
      ? textSnippet.slice(0, snippetLength) + "..."
      : textSnippet;
  } catch (error) {
    console.error("Error parsing content:", error);
    return "Content preview unavailable...";
  }
};

// BlogCard Component
const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const snippet = getContentSnippet(content);

  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 mt-5 w-screen max-w-screen-md cursor-pointer ">
        <div className="flex ">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} />
          </div>
          <div className="font-extralight text-sm pl-2  flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin ">{snippet}</div>
        <div className="text-slate-500 text-sm pt-2">
          {`${Math.ceil(snippet.length / 100)} minute read`}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

// Circle Component
export function Circle() {
  return <div className="w-1 h-1 rounded-full bg-slate-500"></div>;
}

// Avatar Component
export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-medium text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
