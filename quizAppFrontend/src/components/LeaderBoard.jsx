import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLeaderboard, setFilteredLeaderboard] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const API_URL = "http://localhost:8080/leaderboard";
  const CURRENT_USER_ID = "123"; // Replace with actual user ID from authentication

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLeaderboard(data);
        setFilteredLeaderboard(data);

        // Find current user from leaderboard
        const user = data.find((player) => player.userId === CURRENT_USER_ID);
        if (user) setCurrentUser(user);
      })
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);

  // Handle search filtering
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredLeaderboard(
      leaderboard.filter(
        (player) =>
          player.userName.toLowerCase().includes(query) ||
          player.country.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 mt-10">
      {/* Left Sidebar - Current User Stats */}
      <div className="w-1/4 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
        <h3 className="text-gray-700 text-2xl font-bold mb-4">Your Stats</h3>
        {currentUser ? (
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-4 rounded-lg w-full text-center shadow-md text-white">
            <p className="font-semibold">User ID: {currentUser.userId}</p>
            <p className="font-semibold">Username: {currentUser.userName}</p>
            <p className="font-semibold">Country: {currentUser.country}</p>
            <p className="font-bold text-xl mt-2">Score: {currentUser.score}</p>
          </div>
        ) : (
          <p className="text-gray-600 font-semibold">User stats not available</p>
        )}
      </div>

      {/* Main Leaderboard Section */}
      <div className="w-2/4 flex flex-col pt-6 px-4">
        <h2 className="text-gray-800 text-3xl font-bold text-center mb-6">Leaderboard</h2>
        <div className="bg-white rounded-lg p-4 overflow-x-auto shadow-lg border border-gray-200">
          {filteredLeaderboard.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-amber-400 to-yellow-300 text-white">
                <tr>
                  <th className="p-3 font-semibold">Rank</th>
                  <th className="p-3 font-semibold">User ID</th>
                  <th className="p-3 font-semibold">Username</th>
                  <th className="p-3 font-semibold">Country</th>
                  <th className="p-3 font-semibold">Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboard.map((player, index) => (
                  <tr
                    key={player.userId}
                    className="border-b border-gray-300 hover:bg-yellow-100 transition"
                  >
                    <td className="p-3 font-bold text-gray-700">{index + 1}</td>
                    <td className="p-3 text-gray-700">{player.userId}</td>
                    <td className="p-3 text-gray-700">{player.userName}</td>
                    <td className="p-3 text-gray-700">{player.country}</td>
                    <td className="p-3 font-bold text-gray-800">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-700 text-lg font-semibold text-center">No leaderboard data available</p>
          )}
        </div>
      </div>

      {/* Right Sidebar - Search Bar */}
      <div className="w-1/4 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center">
        <h3 className="text-gray-700 text-2xl font-bold mb-4">Search Players</h3>
        <input
          type="text"
          placeholder="Search by name or country..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>
    </div>
  );
}

export default Leaderboard;
