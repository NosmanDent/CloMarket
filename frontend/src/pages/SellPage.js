import React, { useState } from "react";
import { Link } from "react-router-dom";

const SellPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSource = isHovered
    ? "https://images.unsplash.com/photo-1682005418978-d7ccb6595fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
    : "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80";

  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-10 h-screen gap-5">
      <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-green-700 font-bold lg:text-6xl md:text-5xl sm:text-3xl text-2xl">
              Sell —
            </h1>
            <h1 className="text-green-900 font-bold lg:text-6xl md:text-5xl sm:text-3xl text-2xl">
              everywhere
            </h1>
          </div>
          <p className="text-stone-800 text-md md:text-2xl">
            One platform that lets you sell wherever your customers are—online,
            in‑person, and everywhere in‑between.
          </p>
        </div>
        <div className="hidden md:flex flex-col md:flex-row w-full gap-8">
          <div>
            <Link
              to="/create"
              className="border-b border-black pb-1 whitespace-nowrap font-semibold"
            >
              POST YOUR PRODUCT
            </Link>
          </div>
          <div>
            <Link
              to="/store"
              className="border-b border-black pb-1 whitespace-nowrap font-semibold"
            >
              YOU ARE HERE TO BUY? CLICK HERE
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full md:w-1/2 gap-3">
        <div className="w-full">
          <img
            className="bg-cover bg-center"
            src={imageSource}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="h-full flex flex-row md:flex-col w-full gap-3">
          <div className="md:flex hidden h-1/2 w-full">
            <img
              className="bg-cover bg-center h-[250px] w-full "
              src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt=""
            />
          </div>
          <div className="h-1/2 w-full">
            <img
              className="bg-cover bg-center h-[250px] w-full"
              src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col md:flex-row w-full gap-8">
        <div>
          <Link
            to="/create"
            className="border-b border-black pb-1 whitespace-nowrap font-semibold"
          >
            SELL HERE
          </Link>
        </div>
        <div className="ml-auto mb-16 md:mb-0">
          <Link
            to="/store"
            className="border-b border-black pb-1 whitespace-nowrap font-semibold "
          >
            BUY HERE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SellPage;
