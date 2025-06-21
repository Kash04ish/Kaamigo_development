// === pages/Reels.jsx ===
import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

const Reels = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const folderRef = ref(storage, "reels/");
      const result = await listAll(folderRef);
      const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));
      setVideos(urls);
    };
    fetchVideos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Worker Reels</h2>
      {videos.map((url, i) => (
        <video key={i} controls className="mb-4 rounded shadow w-full">
          <source src={url} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default Reels;
