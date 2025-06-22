// === pages/Jobs.jsx ===
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Jobs = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const postJob = async () => {
    try {
      await addDoc(collection(db, "jobs"), { title, desc, created: new Date() });
      alert("Job Posted!");
      setTitle(""); setDesc("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2 text-red-950">Post a Job</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Title" className="border p-2 w-full my-2 rounded-lg outline-none hover:border-indigo-700" />
      <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Job Description" className="border p-2 w-full my-2 rounded-lg outline-none hover:border-indigo-700" />
      <button onClick={postJob} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">Post Job</button>
    </div>
  );
};

export default Jobs;
