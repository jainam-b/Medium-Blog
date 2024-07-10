import { Link } from "react-router-dom";
import { useUsername } from "../hooks";

const AppBar = () => {
  const name = useUsername();

  // Ensure name is a string and get the first letter
  const firstLetter =
    typeof name === "string" && name.length > 0
      ? name.charAt(0).toUpperCase()
      : " ";

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/blogs"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Medium
            </span>
          </a>

          <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
            <Link to={"/publish"}>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                New
              </button>
            </Link>
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {firstLetter}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
