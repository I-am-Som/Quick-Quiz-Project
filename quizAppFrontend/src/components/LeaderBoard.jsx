import { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState({ name: "Som", country: "India", score: 75, rank: 7 }); // Example current user data

  const API_URL = "http://localhost:8080/leaderboard/get"; // Backend API

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLeaders(data);
      })
      .catch((err) => {
        console.error("Failed to load leaderboard.", err);
      });
  }, []);

  // Filter leaders based on search query
  const filteredLeaders = leaders.filter(
    (leader) =>
      leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full w-full flex p-6 bg-black text-yellow-400">
      {/* Left Navigation Section */}
      <div className="w-1/4 p-4 bg-gray-800 rounded-l-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Score & Rank</h2>
        <div className="mb-2">
          <strong>Name:</strong> {currentUser.name}
        </div>
        <div className="mb-2">
          <strong>Rank:</strong> {currentUser.rank}
        </div>
        <div className="mb-2">
          <strong>Score:</strong> {currentUser.score}
        </div>
      </div>

      {/* Center Table Section */}
      <div className="w-2/4 p-4">
        <h1 className="text-3xl font-bold mb-4 uppercase tracking-widest text-center">🏆 Leaderboard</h1>
        <table className="w-full max-w-2xl border border-yellow-400 rounded-lg overflow-hidden shadow-lg mx-auto">
          <thead className="bg-yellow-500/20 text-yellow-400 uppercase">
            <tr>
              <th className="border border-yellow-400 px-4 py-2">Rank</th>
              <th className="border border-yellow-400 px-4 py-2">Name</th>
              <th className="border border-yellow-400 px-4 py-2">Country</th>
              <th className="border border-yellow-400 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaders.map((player, index) => (
              <tr key={player.id} className="hover:bg-yellow-500/20 transition duration-200">
                <td className="border border-yellow-400 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-yellow-400 px-4 py-2">{player.name}</td>
                <td className="border border-yellow-400 px-4 py-2">{player.country}</td>
                <td className="border border-yellow-400 px-4 py-2 text-center">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Navigation Section */}
      <div className="w-1/4 p-4 bg-gray-800 rounded-r-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Search Leaderboard</h2>
        <input
          type="text"
          className="w-full p-2 bg-gray-700 text-yellow-400 rounded-lg mb-4"
          placeholder="Search by name or country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <h3 className="text-lg font-bold mb-4">Search Results:</h3>
        {filteredLeaders.length > 0 ? (
          <ul className="space-y-2">
            {filteredLeaders.map((leader) => (
              <li key={leader.id} className="border-b border-yellow-400 pb-2">
                {leader.name} ({leader.country}) - {leader.score} pts
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
