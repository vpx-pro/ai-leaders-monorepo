import React, { useEffect, useState } from "react";
import "./index.css";

const API_BASE = process.env.REACT_APP_API_URL || "https://ai-leaders-backend.onrender.com/api";

export default function App() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    console.log("🌐 API Base:", API_BASE);
    fetch(`${API_BASE}/leaders`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Fetched leaders:", data);
        setLeaders(data);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch leaders:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">🌍 AI Leaders on AGI</h1>
      {leaders.length === 0 ? (
        <p className="text-center text-gray-400">Loading or empty...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="w-full max-w-xs bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transform transition duration-300">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-28 h-28 object-cover rounded-full shadow-lg border-4 border-white -mt-16"
              />
              <h2 className="text-xl font-semibold text-center mt-4 text-gray-900">{leader.name}</h2>
              <p className="text-sm text-gray-500 text-center mb-3">{leader.title}</p>
              <p className="text-sm text-gray-700 italic mb-4">"{leader.quote}"</p>
              <a
                href={leader.source}
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
