import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SideBar from "../SideBar/SideBar";

import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ViewCurrentDietPlans() {
  const [cricketerMealPlan, setCricketerMealPlan] = useState([]);
  const [search, setsearch] = useState("");

  const params = useParams();
  useEffect(() => {
    async function fetchCurrentMealDetails() {
      const response = await fetch(
        `http://localhost:5012/api/MealPlan/getMealDetails/${params.playerID.toString()}`
      );

      if (!response.ok) {
        window.alert(`${params.id.toString()}`);
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      const breakfastRecords = records.filter(
        (record) => record.type === "breakfast"
      );
      setCricketerMealPlan(breakfastRecords);
    }
    fetchCurrentMealDetails();
  }, []);

  const dateFormatter = (date) => {
    const mdate = new Date(date);
    const latestDate = mdate.toISOString().substr(0, 10);
    return latestDate;
  };

  async function deleteMeal(id) {
    try {
      await axios.delete(
        `http://localhost:5012/api/MealPlan/deleteMealDetails/${id}`
      );
      alert("Meal Deleted");
      navigate(`/getBreakfastPlayerDetails/${params.playerID.toString()}`);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(cricketerMealPlan);
  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: "80px" }}>
        <center>
          <h1>View Your Daily Meal Diets </h1>
        </center>
        <br />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button
            variant="contained"
            color="inherit"
            style={{ width: "300px", color: "black" }}
          >
            <a
              href="/cricketerDietPlan/addMealPlan"
              style={{ textDecoration: "none", color: "black" }}
            >
              Add Taken Meal Details
            </a>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="inherit"
            style={{ width: "200px", color: "black" }}
          >
            <Link
              to={`/cricketerDietPlan/viewDietPlan/${params.playerID.toString()}`}
            >
              View Diet Plans
            </Link>
          </Button>
        </div>
        <br /> <br />
        <div>
          <input
            style={{
              marginLeft: "60px",
              height: "40px",
              width: "250px",
              borderRadius: "35px",
              backgroundColor: "lightgrey",
            }}
            type="search"
            placeholder="   Search for Diet Meals ..."
            name="searchQuery"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          ></input>
          <br />
          <br />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">
                  Meal Description
                </StyledTableCell>
                <StyledTableCell align="right">Notes</StyledTableCell>
                <StyledTableCell align="right">
                  Calories&nbsp;(Kcal)
                </StyledTableCell>
                <StyledTableCell align="right">
                  Fat Measure&nbsp;(g)
                </StyledTableCell>
                <StyledTableCell align="right">
                  Protein Measure&nbsp;(g)
                </StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cricketerMealPlan
                .filter((mealPlan) => {
                  if (search === "") {
                    return mealPlan;
                  } else if (
                    mealPlan.date
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    mealPlan.mealDescription
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return mealPlan;
                  }
                })
                .map((mealPlan) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell align="right">
                        {dateFormatter(mealPlan.date)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {mealPlan.mealDescription}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {mealPlan.note}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {mealPlan.caloriesMeasure}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {mealPlan.fatMeasure}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {mealPlan.protienMeasure}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Stack direction="row">
                          &nbsp;&nbsp;&nbsp; &nbsp;
                          <Button variant="contained">
                            <Link
                              to={`/cricketerDietPlan/editMealPlan/${mealPlan._id}`}
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Edit
                            </Link>
                          </Button>
                          &nbsp;&nbsp;&nbsp;
                          <Button
                            variant="contained"
                            onClick={() => {
                              deleteMeal(mealPlan._id);
                            }}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ViewCurrentDietPlans;