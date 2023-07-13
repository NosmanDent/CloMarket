import React from "react";

function Loader() {
  return (
    <main className="flex flex-col items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center font mt-10">
        <div className="bg-gray-300 md:px-16 py-2 px-10  flex animate-pulse rounded-lg mb-10"></div>
        <div className="mb-10 text-center bg-gray-300 md:px-32 py-2 px-24 rounded-lg animate-pulse"></div>

        <div className="mb-10 text-center bg-gray-300 md:px-16 py-2 px-10 rounded-lg animate-pulse"></div>
      </div>
      <div className="flex flex-wrap gap-3 w-full items-center justify-center mb-10 h-1/2 ">
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
        <div className="md:px-16 md:py-4 px-10 py-2 bg-gray-300 animate-pulse"></div>
      </div>
      <div className="grid place-content-center py-36 h-screen">
        <div className="h-20 w-20 rounded-full border-4 border-l-stone-400 border-black animate-spin text-white text-center"></div>
      </div>
    </main>
  );
}

export default Loader;
