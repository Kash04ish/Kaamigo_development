// === App.jsx ===
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Reels from "./Pages/Reels";
import Explore from "./Pages/Explore";
import Jobs from "./Pages/Jobs";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import BottomNav from "./Components/BottomNav";

const App = () => {
  return (
    <Router>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;