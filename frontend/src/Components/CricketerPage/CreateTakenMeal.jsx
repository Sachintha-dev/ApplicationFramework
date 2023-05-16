import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import SideBar from "../SideBar/SideBar";

function CreateTakenMeal() {
  const params = useParams();
  const [playerID, setPlayerID] = useState("");
  const [date, setDate] = useState("");
  const [type, setMealType] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [caloriesMeasure, setCalorieMeasure] = useState("");
  const [protienMeasure, setProtienMeasure] = useState("");
  const [fatMeasure, setFatMeasure] = useState("");
  const [note, setNote] = useState("");

  const createMeal = (e) => {
    e.preventDefault();
    const newMeal = {
      playerID,
      date,
      type: type,
      mealDescription,
      caloriesMeasure,
      protienMeasure,
      fatMeasure,
      note,
    };

    window.alert("Button press");

    axios
      .post("http://localhost:5012/api/MealPlan/addMeal", newMeal)
      .then((res) => {
        console.log(res.data);
        alert("Diet Added Successfully!");
        //navigate(`/CricketDietPlan/viewMealPlan/${params.playerID.toString()}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Adding Diet!");
      });
  };
  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: "80px" }}>
        <center>
          <h1>Create Daily Meal</h1>
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
                label="Player ID"
                variant="outlined"
                onChange={(e) => setPlayerID(e.target.value)}
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
                onChange={(e) => setDate(e.target.value)}
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
                variant="outlined"
                onChange={(e) => setMealType(e.target.value)}
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
                label="Meal Description"
                variant="outlined"
                onChange={(e) => setMealDescription(e.target.value)}
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
                label="Calory Measure"
                variant="outlined"
                onChange={(e) => setCalorieMeasure(e.target.value)}
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
                label="Fat Measure"
                variant="outlined"
                onChange={(e) => setFatMeasure(e.target.value)}
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
                label="Protein Measure"
                variant="outlined"
                type="number"
                onChange={(e) => setProtienMeasure(e.target.value)}
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
                label="Meal Note"
                variant="outlined"
                onChange={(e) => setNote(e.target.value)}
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
                onClick={createMeal}
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

export default CreateTakenMeal;
