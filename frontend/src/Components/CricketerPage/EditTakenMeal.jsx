import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import SideBar from "../SideBar/SideBar";

function EditTakenMeal() {
  const params = useParams();
  const [playerID, updatePlayerID] = useState("");
  const [date, updateDate] = useState("");
  const [type, updateMealType] = useState("");
  const [mealDescription, updateMealDescription] = useState("");
  const [caloriesMeasure, updateCalorieMeasure] = useState("");
  const [protienMeasure, updateProtienMeasure] = useState("");
  const [fatMeasure, updateFatMeasure] = useState("");
  const [note, updateNote] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMeal() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5012/api/MealPlan/searchMealDetails/${params.id}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const mealRecord = await response.json();
      updatePlayerID(mealRecord.playerID);
      updateDate(mealRecord.date);
      updateMealType(mealRecord.type);
      updateMealDescription(mealRecord.mealDescription);
      updateCalorieMeasure(mealRecord.caloriesMeasure);
      updateProtienMeasure(mealRecord.protienMeasure);
      updateFatMeasure(mealRecord.fatMeasure);
      updateNote(mealRecord.note);
    }
    fetchMeal();
  }, [params.id]);

  async function editData(e) {
    e.preventDefault();
    const updateMeal = {
      playerID,
      date,
      type,
      mealDescription,
      caloriesMeasure,
      protienMeasure,
      fatMeasure,
      note,
    };

    await fetch(
      `http://localhost:5012/api/MealPlan/updateMealDetails/${params.id}`,
      {
        method: "put",
        body: JSON.stringify(updateMeal),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate(`/cricketerDietPlan/viewMealPlan/${playerID}`);
  }

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: "80px" }}>
        <center>
          <h1>Edit Daily Meal Details</h1>
        </center>
        <div>
          <center>
            <Box
              component="form"
              sx={{
                border: "1px solid black",
                borderRadius: "3px",
                padding: "20px",
                width: "80%",
                alignItems: "center",
                paddingTop: "50px",
              }}
              noValidate
              autoComplete="off"
            >
              <label htmlFor="player_ID" style={{ fontSize: "20px" }}>
                Enter Player_ID
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={playerID}
                variant="outlined"
                //onChange={(e) => setPlayerID(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <label htmlFor="diet_date" style={{ fontSize: "20px" }}>
                Enter Diet Date
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="date"
                onChange={(e) => updateDate(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <label htmlFor="type" style={{ fontSize: "20px" }}>
                Enter Meal Type
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={type}
                variant="outlined"
                onChange={(e) => updateMealType(e.target.value)}
                select
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                  },
                  width: "60%",
                }}
              >
                <MenuItem value="breakfast">Breakfast</MenuItem>
                <MenuItem value="lunch">Lunch</MenuItem>
                <MenuItem value="dinner">Dinner</MenuItem>
              </TextField>
              <br />
              <br />
              <label htmlFor="=mealDescription" style={{ fontSize: "20px" }}>
                Enter Meal Description
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={mealDescription}
                variant="outlined"
                onChange={(e) => updateMealDescription(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <label htmlFor="calory_measure" style={{ fontSize: "20px" }}>
                Enter Calory Measure
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={caloriesMeasure}
                variant="outlined"
                onChange={(e) => updateCalorieMeasure(e.target.value)}
                type="number"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <label htmlFor="fat_measure" style={{ fontSize: "20px" }}>
                Enter Fat Measure
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={fatMeasure}
                variant="outlined"
                onChange={(e) => updateFatMeasure(e.target.value)}
                type="number"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <label htmlFor="protein_measure" style={{ fontSize: "20px" }}>
                Enter Protein Measure
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={protienMeasure}
                variant="outlined"
                type="number"
                onChange={(e) => updateProtienMeasure(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <label htmlFor="meal_note" style={{ fontSize: "20px" }}>
                Enter Note
              </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                id="outlined-basic"
                value={note}
                variant="outlined"
                onChange={(e) => updateNote(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "1px",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "15px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "15px",
                    color: "black",
                  },
                  width: "60%",
                }}
              />
              <br />
              <br />
              <button
                type="submit"
                onClick={editData}
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
            </Box>
          </center>
        </div>
      </div>
    </div>
  );
}

export default EditTakenMeal;
