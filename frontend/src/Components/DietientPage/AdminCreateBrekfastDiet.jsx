import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminCreateBrekfastDiet() {
  const params = useParams();
  const [playerID, setPlayerID] = useState(`${params.playerID.toString()}`);
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
      dietID,
      date,
      type,
      dietDescription,
      totalCalories,
      totalProtien,
      totalFat,
    };
    window.alert(
      playerID,
      playerName,
      dietID,
      date,
      diet,
      type,
      Description,
      totalCalories,
      totalFat,
      totalProtien
    );

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
      setPlayerName(records[0].playerName);
      setPlayerDietPlan(records);
    }
    fetchPlayerDietData();
  }, [params.playerID]);

  return (
    <div>
      <h1>Create New Diet Plan</h1>
      <form onSubmit={createDietPlan}>
        <label htmlFor="player_ID">Enter Player_ID</label>
        <br />
        <input
          type="text"
          id="brekfastInput"
          value={playerID}
          onChange={(e) => setPlayerID(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="player_Name">Enter Player Name</label>
        <br />
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="player_Name">Enter Meal type</label>
        <br />
        <select
          name="type"
          id="meals"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <br />
        <br />
        <label htmlFor="diet_id">Enter Diet_ID</label>
        <br />
        <input
          type="text"
          id="brekfastInput"
          onChange={(e) => setDietID(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="diet_date">Enter Diet Date</label>
        <br />
        <input
          type="date"
          id="diet_date"
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="meal_description">Enter Meal Description</label>
        <br />
        <textarea
          id="meal_description"
          onChange={(e) => setDietDescription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="total_calories">
          Enter total Calories to be gained
        </label>
        <br />
        <input
          type="number"
          id="total_calories"
          onChange={(e) => setTotalCalories(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="total_fat">Enter total Fat to be gained</label>
        <br />
        <input
          type="number"
          id="total_fat"
          onChange={(e) => setTotalFat(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="total_protein">Enter total Protein to be gained</label>
        <br />
        <input
          type="number"
          id="total_protein"
          onChange={(e) => setTotalProtein(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminCreateBrekfastDiet;
