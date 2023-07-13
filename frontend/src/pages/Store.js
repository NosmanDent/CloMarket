import { useEffect, useState } from "react";
import {
  FaStore,
  FaBlenderPhone,
  FaCar,
  FaBaby,
  FaTools,
} from "react-icons/fa";
import { MdStyle, MdNoFood } from "react-icons/md";
import {
  GiHealthPotion,
  GiHomeGarage,
  GiBarStool,
  GiTreehouse,
} from "react-icons/gi";
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
    // Your existing component content
    <div className="flex flex-col items-center justify-center px-3 cursor-pointer">
      <div className="flex flex-col items-center justify-center font mt-10">
        <h1 className="md:text-3xl text-2xl text-center font-bold flex flex-row items-center">
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
        </h1>
        <h1 className="mb-10 text-center leading-tight text-xs md:text-sm">
          There are over 10,000+ product waiting for you
        </h1>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">BUY NOW!</h1>
      </div>
      <div className="flex flex-wrap gap-3 w-full items-center justify-center mb-10">
        <div
          className={`border ${
            activeCategory === "all" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("all")}
        >
          All{" "}
          <span>
            <FaStore />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "fashion" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("fashion")}
        >
          Fashion{" "}
          <span>
            <MdStyle />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "phone" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("phone")}
        >
          Phone
          <span>
            <FaBlenderPhone />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "car" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("car")}
        >
          Vehicles
          <span>
            <FaCar />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "property" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("property")}
        >
          Property
          <span>
            <GiHomeGarage />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "health" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("health")}
        >
          Health and Beauty
          <span>
            <GiHealthPotion />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "outdoors" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("outdoors")}
        >
          Outdoors
          <span>
            <GiHomeGarage />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "babies-kids" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("babies-kids")}
        >
          Babies & Kids
          <span>
            <FaBaby />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "agriculture-food" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("agriculture-food")}
        >
          Agriculture & Food
          <span>
            <MdNoFood />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "home-appliance" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("home-appliance")}
        >
          Home Appliances
          <span>
            <GiTreehouse />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "repair-construction" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("repair-construction")}
        >
          Repair and Construction
          <span>
            <FaTools />
          </span>
        </div>
        <div
          className={`border ${
            activeCategory === "commercial-tools" ? "bg-black" : "bg_2"
          } border-[bg_2] md:px-6 md:py-4 px-3 py-2 text-sm md:text-text-md text-white font-semibold flex flex-col items-center justify-center`}
          onClick={() => filterByCategory("commercial-tools")}
        >
          Commercial Tools
          <span>
            <GiBarStool />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mb-20">
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
