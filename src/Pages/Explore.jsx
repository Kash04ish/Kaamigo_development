import React, { useEffect, useState } from "react";
import VoiceSearchInput from "../Components/VoiceSearchInput";
import { FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// Dummy workers list
const allWorkers = [
  { id: 1, name: "Ramesh Kumar", job: "Electrician", rating: 4.8, location: "Patna" },
  { id: 2, name: "Suresh Yadav", job: "Plumber", rating: 4.6, location: "Gaya" },
  { id: 3, name: "Amit Singh", job: "Carpenter", rating: 4.5, location: "Muzaffarpur" },
  { id: 4, name: "Rahul Verma", job: "Electrician", rating: 4.7, location: "Bhagalpur" },
  { id: 5, name: "Sunita Devi", job: "Painter", rating: 4.9, location: "Darbhanga" },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWorkers, setFilteredWorkers] = useState(allWorkers);

  useEffect(() => {
    const filtered = allWorkers.filter(
      (w) =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWorkers(filtered);
  }, [searchTerm]);

  return (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold mb-4 text-orange-700">Explore Workers 🔍</h1>

      {/* Voice search + manual input */}
      <div className="mb-4">
        <VoiceSearchInput />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search manually..."
          className="mt-3 w-full px-4 py-2 rounded-lg border border-gray-300 text-sm outline-none"
        />
      </div>

      {/* Trending Categories */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Trending Categories</h2>
        <div className="flex flex-wrap gap-2">
          {["Electrician", "Plumber", "Carpenter", "Painter", "Cleaner"].map((job) => (
            <button
              key={job}
              onClick={() => setSearchTerm(job)}
              className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200"
            >
              {job}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              className="bg-white shadow rounded-xl p-4 mb-3 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-800">{worker.name}</h3>
              <p className="text-sm text-gray-600">{worker.job}</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <FiMapPin className="mr-1" />
                {worker.location}
              </div>
              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                <FaStar />
                {worker.rating}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">No workers found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
