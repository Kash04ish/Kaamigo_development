// === pages/Explore.jsx ===
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Explore = () => {
  const [workers, setWorkers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 4,
    width: "100%",
    height: "80vh"
  });

  useEffect(() => {
    const fetchWorkers = async () => {
      const snapshot = await getDocs(collection(db, "workers"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWorkers(data);
    };
    fetchWorkers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Explore Freelancers</h2>
      <ReactMapGL
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        mapboxAccessToken="YOUR_MAPBOX_TOKEN"
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {workers.map((w, i) => (
          <Marker
            key={i}
            latitude={w.lat || 20.5}
            longitude={w.lng || 78.9}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <div className="bg-orange-500 text-white rounded-full p-2 text-xs">{w.name}</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Explore;
