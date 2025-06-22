import React, { useState, useEffect } from "react";

const dummyVideos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  "https://media.w3.org/2010/05/bunny/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  "https://media.w3.org/2010/05/bunny/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  "https://media.w3.org/2010/05/bunny/movie.mp4",
];

const Reels = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setVideos(dummyVideos);
    }, 500);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Worker Reels</h2>

      <div className="grid grid-cols-auto gap-5">
        {videos.map((url, i) => (
          <video
            key={i}
            controls
            className="mb-4 rounded-xl shadow w-full min-h-[360px] object-cover mx-auto"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default Reels;
