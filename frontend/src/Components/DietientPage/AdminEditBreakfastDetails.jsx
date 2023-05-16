import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function AdminEditBreakfastDetails() {
  const params = useParams();

  const [dietID, updateDietID] = useState("");
  const [date, updateDate] = useState("");
  const [type, updateType] = useState("");
  const [dietDescription, updateDietDescription] = useState("");
  const [totalCalories, updateTotalCalories] = useState("");
  const [totalProtien, updateTotalProtein] = useState("");
  const [totalFat, updateTotalFat] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchDietDetails() {
      const response = await fetch(
        `http://localhost:5012/api/breakfastPlan/searchDietDetails/${params.dietID}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(records.dietPlan[0].dietID);
      updateDietID(records.dietPlan[0].dietID);
      updateDate(records.dietPlan[0].date);
      updateDietDescription(records.dietPlan[0].dietDescription);
      updateTotalCalories(records.dietPlan[0].totalCalories);
      updateTotalFat(records.dietPlan[0].totalFat);
      updateTotalProtein(records.dietPlan[0].totalProtien);

      if (!records) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
    }
    fetchDietDetails();
  }, [params.dietID]);

  async function updateData(e) {
    e.preventDefault();

    const updateDietPlan = {
      dietID,
      date,
      type,
      dietDescription,
      totalCalories,
      totalFat,
      totalProtien,
    };

    await fetch(
      `http://localhost:5012/api/breakfastPlan/updateDietDetails/${params.dietID}`,
      {
        method: "put",
        body: JSON.stringify(updateDietPlan),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/breakfastDietPlan/");
  }

  return (
    <div>
      <center>
        <h1>Edit Diet Plan</h1>
        <form
          style={{
            backgroundColor: "lightgoldenrodyellow",
            padding: "20px",
            width: "55%",
            borderStyle: "double",
            borderRadius: "20px",
          }}
          onSubmit={updateData}
        >
          <label htmlFor="player_ID" style={{ fontSize: "20px" }}>
            Update Diet ID
          </label>
          <br />

          <input
            type="text"
            value={dietID}
            style={{
              height: "38px",
              width: "50%",
              borderStyle: "none",
              borderRadius: "10px",
            }}
            onChange={(e) => updateDietID(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="player_ID" style={{ fontSize: "20px" }}>
            Update Date
          </label>
          <br />

          <input
            type="Date"
            value={date}
            style={{
              height: "38px",
              width: "50%",
              borderStyle: "none",
              borderRadius: "10px",
            }}
            onChange={(e) => updateDate(e.target.value)}
          />
          <br />
          <br />

          <label style={{ fontSize: "20px" }}>Update Type</label>
          <br />

          <select
            name="type"
            id="meals"
            value={type}
            onChange={(e) => updateType(e.target.value)}
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

          <label htmlFor="meal_description" style={{ fontSize: "20px" }}>
            Update Meal Description
          </label>
          <br />
          <textarea
            id="meal_description"
            value={dietDescription}
            onChange={(e) => updateDietDescription(e.target.value)}
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
            Update total Calories to be gained
          </label>
          <br />
          <input
            type="number"
            value={totalCalories}
            id="total_calories"
            onChange={(e) => updateTotalCalories(e.target.value)}
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
            Update total Fat to be gained
          </label>
          <br />
          <input
            type="number"
            id="total_fat"
            value={totalFat}
            onChange={(e) => updateTotalFat(e.target.value)}
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
            Update total Protein to be gained
          </label>
          <br />
          <input
            type="number"
            id="total_protein"
            value={totalProtien}
            onChange={(e) => updateTotalProtein(e.target.value)}
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
  );
}

export default AdminEditBreakfastDetails;
