// === pages/Chat.jsx ===
import  { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db} from "../firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("created"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  const sendMessage = async () => {
    if (text.trim()) {
      await addDoc(collection(db, "messages"), {
        text,
        created: new Date()
      });
      setText("");
    }
  };

  return (
    <div className="p-4 mx-2">
      <h2 className="text-2xl font-bold mb-2 text-red-950">Chat</h2>
      <div className="h-64 overflow-y-scroll border p-2 mb-4 outline-none rounded-lg hover:border-indigo-600">
        {messages.map((m, i) => (
          <div key={i} className="mb-2 bg-gray-100 p-2 rounded">
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex w-full gap-5 items-center">
        <input value={text} onChange={e => setText(e.target.value)} className="flex-1 border p-2 outline-none rounded-lg hover:border-indigo-600" />
        <button onClick={sendMessage} className="bg-orange-500 text-white px-4 rounded-lg h-8 hover:bg-orange-600">Send</button>
      </div>
    </div>
  );
};

export default Chat;
