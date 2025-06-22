// === Navbar.jsx ===
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 text-white font-bold text-lg px-3 py-1 rounded-lg">
          K
        </div>
        <h1 className="text-xl font-semibold text-gray-800">Kaamigo</h1>
      </div>
    </div>
  );
};

export default Navbar;
