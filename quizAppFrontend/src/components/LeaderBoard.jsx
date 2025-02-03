import { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:8080/leaderboard"; // Backend API

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLeaders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load leaderboard.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center p-6 bg-black text-yellow-400">
      <h1 className="text-3xl font-bold mb-4 uppercase tracking-widest">🏆 Leaderboard</h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {leaders.length > 0 ? (
        <table className="w-full max-w-2xl border border-yellow-400 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-yellow-500/20 text-yellow-400 uppercase">
            <tr>
              <th className="border border-yellow-400 px-4 py-2">Rank</th>
              <th className="border border-yellow-400 px-4 py-2">Name</th>
              <th className="border border-yellow-400 px-4 py-2">Country</th>
              <th className="border border-yellow-400 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((player, index) => (
              <tr
                key={player.id}
                className="hover:bg-yellow-500/20 transition duration-200"
              >
                <td className="border border-yellow-400 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-yellow-400 px-4 py-2">{player.name}</td>
                <td className="border border-yellow-400 px-4 py-2">{player.country}</td>
                <td className="border border-yellow-400 px-4 py-2 text-center">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p className="text-gray-500">No leaderboard data available.</p>
      )}
    </div>
  );
}

export default Leaderboard;
