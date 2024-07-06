import React from "react";
import AppBar from "../components/AppBar";

const Publish = () => {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div className="flex justify-center w-full pt-8 ">
      <div className="  max-w-screen-lg mt-5 w-full">
      <textarea
  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Title"
></textarea>


      </div>
      </div>
    </div>
  );
};

export default Publish;
