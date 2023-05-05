import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../SideBar/SideBar";

function AdminCreateBrekfastDiet() {
  const params = useParams();
  const [playerID, setPlayerID] = useState(
    `${params.playerID?.toString() || ""}`
  );
  const [playerName, setPlayerName] = useState("");
  const [dietID, setDietID] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [dietDescription, setDietDescription] = useState("");
  const [totalCalories, setTotalCalories] = useState("");
  const [totalProtien, setTotalProtein] = useState("");
  const [totalFat, setTotalFat] = useState("");

  const [playerDietPlan, setPlayerDietPlan] = useState([]);
  const navigate = useNavigate();

  const createDietPlan = (e) => {
    e.preventDefault(); //stop the form from loading on page load.
    const newDiet = {
      playerID,
      playerName,
      type,
      dietID,
      date,
      dietDescription,
      totalCalories,
      totalProtien,
      totalFat,
    };

    axios
      .post("http://localhost:5012/api/breakfastPlan/breakfast", newDiet)
      .then((res) => {
        console.log(res.data);
        alert("Diet Added Successfully!");
        navigate(`/breakfastDietPlan/${params.playerID.toString()}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Adding Diet!");
      });
  };

  useEffect(() => {
    async function fetchPlayerDietData() {
      const response = await fetch(
        `http://localhost:5012/api/breakfastPlan/getBreakfastPlayerDetails/${params.playerID.toString()}`
      );
      if (!response.ok) {
        window.alert(`${params.playerID.toString()}`);
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(records);

      if (records.length > 0) {
        setPlayerName(records[0].playerName);
        setPlayerDietPlan(records);
      } else {
        setPlayerName("");
        setPlayerDietPlan([]);
      }
    }
    fetchPlayerDietData();
  }, [params.playerID]);

  return (
    <div>
      <SideBar />
      <div>
        <center>
          <h1>Create New Diet Plan</h1>
          <form
            onSubmit={createDietPlan}
            style={{
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, hsla(208, 7%, 65%, 1) 0%, hsla(191, 5%, 80%, 1) 100%)",
              padding: "20px",
              width: "55%",
              borderStyle: "double",
              borderRadius: "20px",
            }}
          >
            <label htmlFor="player_ID" style={{ fontSize: "20px" }}>
              Enter Player_ID
            </label>
            <br />

            <input
              type="text"
              id="brekfastInput"
              value={playerID}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
              onChange={(e) => setPlayerID(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="player_Name" style={{ fontSize: "20px" }}>
              Enter Player Name
            </label>
            <br />
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <label htmlFor="player_Name" style={{ fontSize: "20px" }}>
              Enter Meal type
            </label>
            <br />
            <select
              name="type"
              id="meals"
              onChange={(e) => setType(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>

            <br />
            <br />
            <label htmlFor="diet_id" style={{ fontSize: "20px" }}>
              Enter Diet_ID
            </label>
            <br />
            <input
              type="text"
              id="brekfastInput"
              onChange={(e) => setDietID(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <label htmlFor="diet_date" style={{ fontSize: "20px" }}>
              Enter Diet Date
            </label>
            <br />
            <input
              type="date"
              id="diet_date"
              onChange={(e) => setDate(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <label htmlFor="meal_description" style={{ fontSize: "20px" }}>
              Enter Meal Description
            </label>
            <br />
            <textarea
              id="meal_description"
              onChange={(e) => setDietDescription(e.target.value)}
              style={{
                height: "250px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <label htmlFor="total_calories" style={{ fontSize: "20px" }}>
              Enter total Calories to be gained
            </label>
            <br />
            <input
              type="number"
              id="total_calories"
              onChange={(e) => setTotalCalories(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <label htmlFor="total_fat" style={{ fontSize: "20px" }}>
              Enter total Fat to be gained
            </label>
            <br />
            <input
              type="number"
              id="total_fat"
              onChange={(e) => setTotalFat(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <label htmlFor="total_protein" style={{ fontSize: "20px" }}>
              Enter total Protein to be gained
            </label>
            <br />
            <input
              type="number"
              id="total_protein"
              onChange={(e) => setTotalProtein(e.target.value)}
              style={{
                height: "38px",
                width: "50%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
            />
            <br />
            <br />
            <button
              type="submit"
              style={{
                height: "40px",
                width: "150px",
                backgroundColor: "#32a852",
                texAlign: "center",
                color: "white",
              }}
            >
              SUBMIT
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default AdminCreateBrekfastDiet;
