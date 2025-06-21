// === Home.jsx ===
import React from "react";
import VoiceSearchInput from "../Components/VoiceSearchInput";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Kaamigo 👋</h1>
      <img
        src="/images/trending-worker.jpg"
        alt="trending worker"
        className="rounded-xl shadow mb-4 w-full"
      />
      <VoiceSearchInput />
      <div className="mt-6">
        <p className="text-gray-700 text-sm">Try voice commands like:</p>
        <ul className="list-disc ml-5 text-sm text-gray-600">
          <li>"Find electrician near me"</li>
          <li>"Show trending workers"</li>
          <li>"Post a plumbing job"</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
