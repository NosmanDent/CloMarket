import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleAddSell = () => {
    if (!user) {
      toast.error("Please sign in or log in", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (user) {
      navigate("/sellpage");
    }
  };
  return (
    <main className="h-screen">
      <div className="">
        <div
          className="bg-cover bg-center h-screen w-full md:bg-cover md:bg-center md:bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"})`,
          }}
        >
          <div className="flex flex-col  w-full h-full  md:items-start items-center justify-center px-10 ">
            <div className="w-full lg:w-1/2 flex flex-col gap-2 md:gap-4">
              <h1 className="mb-3 font-bold lg:text-6xl md:text-5xl text-center md:text-start text-3xl bg-gradient-to-r from-blue-700 to-red-700 text-transparent bg-clip-text">
                Business is not financial science, it's about trading...
              </h1>

              <p className="bg-gradient-to-r from-black to-blue-700 text-transparent bg-clip-text lg:text-5xl md:text-3xl text-2xl font-bold text-center md:text-start">
                Buy and Sell at the comfort of your home!
              </p>

              <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-normal items-center md:items-center">
                <Link
                  to="store"
                  className="bg-gradient-to-r from-red-400 to-red-900   rounded-lg text-white text-center  py-3 md:w-1/2 w-full whitespace-nowrap"
                >
                  SHOP NOW
                </Link>
                <button
                  onClick={handleAddSell}
                  className="bg-gradient-to-r from-blue-400 to-blue-900  rounded-lg text-white  py-3 md:w-1/2 w-full whitespace-nowrap"
                >
                  SELL NOW
                </button>
              </div>
              <ToastContainer autoClose={3000} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
