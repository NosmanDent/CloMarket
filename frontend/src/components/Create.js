import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Create = () => {
  const [creating, setCreatting] = useState(false);
  const [created, setCreated] = useState(false);
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desp, setDesp] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDelete = () => {
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setCreatting(true);

    if (
      !title ||
      !price ||
      !desp ||
      !category ||
      !condition ||
      !image ||
      !brand ||
      !email ||
      !phoneNumber
    ) {
      setFormError(
        "Please fill in all the fields and select a file to upload."
      );
      setCreatting(false);
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desp", desp);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("brand", brand);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("img", image);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await fetch("/api/markets", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Document successfully created
        console.log("Document created");
        setCreatting(false);
        setCreated(true);
        navigate("/store");
      } else {
        // Handle error case
        console.error("Failed to create document");
        setCreatting(false);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setCreatting(false);
    }
  };

  return (
    <div className="container  px-4 sm:px-6 lg:px-8 font pb-10">
      <div className="flex flex-row gap-2 items-center cursor-pointer">
        <Link to="/sellpage">Back</Link>
        <div>
          <LiaGreaterThanSolid />
        </div>
        <Link to="/store">Store</Link>
      </div>
      <div className="flex flex-col items-center justify-center font mt-10">
        <h1 className="md:text-3xl text-2xl text-center font-bold">
          Welcome! Fill in the form, follow the instructions and sell your
          product
        </h1>
        <h1 className="mb-10 text-center leading-tight text-xs md:text-md">
          There are over 10,000+ buyers waiting to explore and buy what you have
        </h1>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Create NOW!</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col mb-20 "
      >
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Description:</span>
          <input
            type="text"
            value={desp}
            onChange={(e) => setDesp(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Category:</span>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-500 rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-xs md:text-sm"
          >
            <option value="">Select category</option>
            <option value="phone">Phone</option>
            <option value="car">Vehicles</option>
            <option value="property">Property</option>
            <option value="fashion">Fashion</option>
            <option value="outdoors">Outdoors</option>
            <option value="babies-kids">Babies & Kids</option>
            <option value="health">Health and Beauty</option>
            <option value="home-appliance">Home Appliances</option>
            <option value="commercial-tools">Commercial Tools</option>
            <option value="repair-construction">Repair and Construction</option>
            <option value="agriculture-food">Agriculture & Food</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Price:</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Condition:</span>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Brand:</span>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Phone Number:</span>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full border border-gray-500 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black font-semibold mr-2">Image:</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 mb-4"
          />
          {image && (
            <div className="flex flex-col items-start w-full">
              <p>Selected image:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="max-w-sm w-1/2"
              />
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-2"
              >
                Delete
              </button>
            </div>
          )}
        </label>

        {formError && <p className="text-red-500 mb-4">{formError}</p>}

        <button
          type="submit"
          className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ${
            creating ? "cursor-not-allowed" : ""
          }`}
          disabled={creating}
        >
          {creating ? "Creating..." : created ? "Created" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default Create;
