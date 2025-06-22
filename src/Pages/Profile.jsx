// === pages/Profile.jsx ===
import React from "react";

const Profile = () => {
  return (
    <div className="px-4 pt-4 pb-2">
      <h2 className="text-2xl font-bold text-orange-700">User Profile</h2>
      <div className="bg-white shadow rounded p-4 mt-4">
        <p className="text-lg font-semibold">Name: Ramesh Kumar</p>
        <p className="text-gray-600">Skill: Electrician</p>
        <p className="text-gray-600">Rating: 4.7 ★</p>
      </div>
    </div>
  );
};

export default Profile;
