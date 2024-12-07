import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r p-10 from-purple-500 to-blue-500">
      <h1 className="text-3xl font-bold">Loading...</h1>
      <img src="/loading.gif" alt="Loading..." className="ml-4 w-16 h-16" />
    </div>
  );
}

export default Loading;
