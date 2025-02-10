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
        // Sort leaderboard by score in descending order
        const sortedData = data.sort((a, b) => b.score - a.score);
        setLeaderboard(sortedData);
        setFilteredLeaderboard(sortedData);

        // Find the current user in the leaderboard
        const user = sortedData.find((player) => player.userId === CURRENT_USER_ID);
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

  // Get current user rank from the full leaderboard
  const currentUserRank =
    currentUser && leaderboard.findIndex((player) => player.userId === currentUser.userId) + 1;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex bg-[#FFF9C4]">
      {/* Left Sidebar - Current User Stats */}
      <div className="w-1/4 bg-[#FFECB3] p-6 shadow-md flex flex-col items-center">
        <h3 className="text-[#4E342E] text-2xl font-bold mb-4">Your Stats</h3>
        {currentUser ? (
          <div className="bg-[#FFF176] p-4 rounded-lg w-full text-center shadow-md">
            <p className="text-[#6D4C41] font-semibold">Rank: {currentUserRank}</p>
            <p className="text-[#6D4C41] font-semibold">Name: {currentUser.userName}</p>
            <p className="text-[#6D4C41] font-bold text-xl mt-2">Score: {currentUser.score}</p>
            <p className="text-[#6D4C41] font-semibold">Country: {currentUser.country}</p>
            <p className="text-[#6D4C41] font-semibold">User ID: {currentUser.userId}</p>
          </div>
        ) : (
          <p className="text-[#6D4C41] font-semibold">User stats not available</p>
        )}
      </div>

      {/* Main Leaderboard Section */}
      <div className="w-2/4 flex flex-col pt-[60px] px-4 overflow-auto">
        <h2 className="text-[#795548] text-3xl font-bold text-center mb-6">Leaderboard</h2>
        <div className="bg-[#FFF59D] rounded-lg overflow-hidden shadow-lg">
          {filteredLeaderboard.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-[#FFD54F] shadow-md">
                <tr className="border-b border-[#8D6E63]">
                  <th className="p-3 text-[#4E342E] font-semibold">Rank</th>
                  <th className="p-3 text-[#4E342E] font-semibold">User ID</th>
                  <th className="p-3 text-[#4E342E] font-semibold">Username</th>
                  <th className="p-3 text-[#4E342E] font-semibold">Country</th>
                  <th className="p-3 text-[#4E342E] font-semibold">Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboard.map((player, index) => (
                  <tr
                    key={player.userId}
                    className="border-b border-[#8D6E63] hover:bg-[#FFECB3] transition"
                  >
                    <td className="p-3 text-[#6D4C41] font-bold">{index + 1}</td>
                    <td className="p-3 text-[#6D4C41]">{player.userId}</td>
                    <td className="p-3 text-[#6D4C41]">{player.userName}</td>
                    <td className="p-3 text-[#6D4C41]">{player.country}</td>
                    <td className="p-3 text-[#6D4C41] font-bold">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-[#795548] text-lg font-semibold text-center">No leaderboard data available</p>
          )}
        </div>
      </div>

      {/* Right Sidebar - Search Bar */}
      <div className="w-1/4 bg-[#FFECB3] p-6 shadow-md flex flex-col items-center">
        <h3 className="text-[#4E342E] text-2xl font-bold mb-4">Search Players</h3>
        <input
          type="text"
          placeholder="Search by name or country..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-3 w-full border border-[#8D6E63] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
        />
      </div>
    </div>
  );
}

export default Leaderboard;
