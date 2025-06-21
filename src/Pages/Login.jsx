// === pages/Login.jsx ===
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full my-2" />
      <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} className="border p-2 w-full my-2" />
      <button onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Login;
