import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

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
    <div
      style={{
        backgroundImage:
          "url('https://www.latrobe.edu.au/news/images/articles/cricket-resized.jpg/1680.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <SideBar />
      <div
        style={{
          marginLeft: 100,
        }}
      >
        <h1>
          <center>Current players in the System</center>
        </h1>
        <br />
        <p
          style={{
            float: "right",
            marginRight: "50px",
            color: "red",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          No of Players are found : {userData.length}
        </p>
        <br />
        <br />
        <br />
        <br />
        {userData.map((playerData) => (
          <div key={playerData.playerID}>
            <center>
              <button
                style={{
                  color: "white",
                  padding: "15px",
                  cursor: "pointer",
                  width: "500px",
                  backgroundColor: "green",
                  fontSize: "20px",
                }}
              >
                <Link
                  to={`${playerData.playerID}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {playerData.playerName}
                </Link>
              </button>
            </center>
            <br />
            <br />
          </div>
        ))}
        <center>
          <button
            style={{
              backgroundColor: "rgb(0, 150, 255)",
              color: "white",
              padding: "14px",
              width: 200,
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            <Link
              to={`/createNewDietPlan/`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Create New Diet Plan
            </Link>
          </button>
        </center>
      </div>
    </div>
  );
}
export default AdminBreakfastDietPlan;
