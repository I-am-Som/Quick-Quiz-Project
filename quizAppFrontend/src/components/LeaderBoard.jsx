import { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const API_URL = "http://localhost:8080/leaderboard"; // Update to match your backend API

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setLeaders(data))
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Leaderboard</h2>
      <table className="w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 px-4 py-2">Rank</th>
            <th className="border border-gray-700 px-4 py-2">Player</th>
            <th className="border border-gray-700 px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaders.length > 0 ? (
            leaders.map((leader, index) => (
              <tr key={leader.id} className="text-center odd:bg-gray-800 even:bg-gray-700">
                <td className="border border-gray-700 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-700 px-4 py-2">{leader.name}</td>
                <td className="border border-gray-700 px-4 py-2">{leader.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-400">
                No scores available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
