import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminBreakfastDietPlan() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const response = await axios.get(
        "http://localhost:5012/api/breakfastPlan/getBreakfastPlayerDetails/"
      );
      setUserData(response.data);
    }
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>adminBreakfastDietPlan: {userData.length} players found.</h1>
      <br />
      {userData.map((playerData) => (
        <div key={playerData.playerID}>
          <button>
            <Link to={`${playerData.playerID}`}>{playerData.playerName}</Link>
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}
export default AdminBreakfastDietPlan;
