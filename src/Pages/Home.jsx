import React from "react";
import { FaMicrophone, FaSearch, FaStar } from "react-icons/fa";
import Worker from "../assets/worker.jpeg"

const Home = () => {
  return (
    <div className="p-4 pb-24">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-5 shadow-md mb-6">
        <div className="font-semibold text-sm mb-1">⭐ Kaamigo</div>
        <h2 className="text-2xl font-bold mb-2">Find Local Workers</h2>
        <p className="text-sm mb-4">Voice-powered search for skilled professionals in your area</p>
        <div className="flex items-center bg-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search for workers, jobs..."
            className="flex-grow text-black outline-none text-sm"
          />
          <FaSearch className="text-gray-400 mr-2" />
          <button className="bg-orange-500 p-2 rounded-full text-white">
            <FaMicrophone />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="bg-white p-3 rounded-xl text-center shadow">
          <p className="text-orange-500 font-bold text-lg">1,200+</p>
          <p className="text-xs text-gray-500">Workers</p>
        </div>
        <div className="bg-white p-3 rounded-xl text-center shadow">
          <p className="text-green-600 font-bold text-lg">850+</p>
          <p className="text-xs text-gray-500">Jobs Done</p>
        </div>
        <div className="bg-white p-3 rounded-xl text-center shadow">
          <p className="text-blue-600 font-bold text-lg flex justify-center items-center gap-1">
            4.8 <FaStar />
          </p>
          <p className="text-xs text-gray-500">Rating</p>
        </div>
      </div>

      {/* Trending Section */}
      <h3 className="text-lg font-semibold mb-2">Trending Workers</h3>
      <img
        src={Worker}
        alt="Trending Worker"
        className="rounded-xl shadow-md w-42"
      />
    </div>
  );
};

export default Home;
