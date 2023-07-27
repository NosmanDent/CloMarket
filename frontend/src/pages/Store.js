import { useEffect, useState } from "react";

import { TbWorldUpload } from "react-icons/tb";
// components
import WorkoutDetails from "../components/WorkoutDetails";
import Loader from "../components/Loader";

const Store = () => {
  const [markets, setMarkets] = useState(null);
  const [filteredMarkets, setFilteredMarkets] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all"); // Active category state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        setIsLoading(true); // Set loading state to true before making the request

        const response = await fetch("/api/markets");
        if (!response.ok) {
          throw new Error("Failed to fetch markets");
        }
        const json = await response.json();
        setMarkets(json);

        setIsLoading(false); // Set loading state to false after receiving the data
      } catch (error) {
        console.log(error);
        // Handle the error state or display an error message to the user
        setIsLoading(false); // Set loading state to false if there's an error
      }
    };

    fetchMarkets();
  }, []);

  useEffect(() => {
    // Filter markets when 'markets' state updates
    if (markets) {
      setFilteredMarkets(markets);
    }
  }, [markets]);

  const filterByCategory = (category) => {
    setActiveCategory(category); // Set active category
    if (category === "all") {
      setFilteredMarkets(markets); // Display all markets
    } else {
      const filteredData = markets.filter(
        (market) => market.category === category
      );
      setFilteredMarkets(filteredData); // Display markets filtered by category
    }
  };

  return isLoading ? (
    // Show loader component when loading is true
    <Loader />
  ) : (
    <div className="flex flex-col items-center px-3 cursor-pointer">
      <div className="flex flex-col items-center justify-center font mt-10">
        <div className="md:text-3xl text-2xl text-center font-bold flex flex-row items-center">
          Welcome to{" "}
          <span>
            <div className="flex flex-1 flex-row items-center  py-1 px-2 font">
              <p className=" text-2xl md:text-3xl text-yellow-600">c</p>
              <p className=" text-2xl md:text-3xl text-red-600">l</p>
              <p className=" text-2xl md:text-3xl text-blue-600">o</p>
              <p className=" text-2xl md:text-3xl text-black">M</p>
              <p className=" text-2xl md:text-3xl text-purple-600">a</p>
              <p className="text-2xl md:text-3xl text-yellow-600">r</p>
              <p className=" text-2xl md:text-3xl text-gray-900">k</p>
              <p className=" text-2xl md:text-3xl text-green-600">e</p>
              <p className=" text-2xl md:text-3xl text-orange-600">t</p>
              <TbWorldUpload className="text-xl md:text-4xl ml-1 text-black hidden md:flex" />
            </div>
          </span>
        </div>
        <h1 className="mb-10 text-center leading-tight text-xs md:text-sm">
          There are over 10,000+ product waiting for you
        </h1>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">BUY NOW!</h1>
      </div>

      <select
        className="bg-stone-300 px-6 mx-20 mb-10 text-sm md:text-md  focus:outline-none border border-blue-700  text-black font-semibold w-full py-3"
        value={activeCategory}
        onChange={(e) => filterByCategory(e.target.value)}
      >
        <option value="all" className="bg-gray-400">
          All
        </option>
        <option value="fashion" className="bg-gray-400">
          Fashion
        </option>
        <option value="phone" className="bg-gray-400">
          Phone
        </option>
        <option value="car" className="bg-gray-400">
          Vehicles
        </option>
        <option value="property" className="bg-gray-400">
          Property
        </option>
        <option value="health" className="bg-gray-400">
          Health and Beauty
        </option>
        <option value="outdoors" className="bg-gray-400">
          Outdoors
        </option>
        <option value="babies-kids" className="bg-gray-400">
          Babies & Kids
        </option>
        <option value="agriculture-food" className="bg-gray-400">
          Agriculture & Food
        </option>
        <option value="home-appliance" className="bg-gray-400">
          Home Appliances
        </option>
        <option value="repair-construction" className="bg-gray-400">
          Repair and Construction
        </option>
        <option value="commercial-tools" className="bg-gray-400">
          Commercial Tools
        </option>
      </select>

      <div className="flex flex-wrap gap-5 items-center justify-center mb-20">
        {filteredMarkets && filteredMarkets.length > 0 ? (
          // Render the market details if there are filtered markets
          filteredMarkets.map((market) => (
            <WorkoutDetails market={market} key={market._id} />
          ))
        ) : (
          // Display a message when no products are available
          <div className="text-center text-gray-500">
            No products available in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
