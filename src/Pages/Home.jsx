import React from "react";
import { FaStar } from "react-icons/fa";
import VoiceSearchInput from "../Components/VoiceSearchInput";
import Worker from "../assets/worker.jpeg";

const Home = () => {
  return (
    <div className="p-4 pb-24">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-10 shadow-md mb-4 ">
        <div className="font-semibold text-sm mb-1">⭐ Kaamigo</div>
        <h2 className="text-2xl font-bold mb-2">Find Local Workers</h2>
        <p className="text-sm mb-4">Voice-powered search for skilled professionals in your area</p>
        
        {/* Use VoiceSearchInput here */}
        <VoiceSearchInput />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6 ">
        <div className="bg-white p-5 rounded-xl text-center shadow ">
          <p className="text-orange-500 font-bold text-lg">1,200+</p>
          <p className="text-xs text-gray-500">Workers</p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow">
          <p className="text-green-600 font-bold text-lg">850+</p>
          <p className="text-xs text-gray-500">Jobs Done</p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow">
          <p className="text-blue-600 font-bold text-lg flex justify-center items-center gap-1">
            4.8 <FaStar />
          </p>
          <p className="text-xs text-gray-500">Rating</p>
        </div>
      </div>

      {/* Trending Section */}
      <h2 className="text-2xl font-semibold mb-2">Trending Workers</h2>

      <div className="grid grid-cols-auto gap-4">
        {[...Array(4)].map((_, i) => (
          <img
            key={i}
            src={Worker}
            alt="Trending Worker"
            className="rounded-xl shadow-md w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
