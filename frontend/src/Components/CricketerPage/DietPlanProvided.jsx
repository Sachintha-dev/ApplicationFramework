import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SideBar from "../SideBar/SideBar";
function AdminViewBrekfastDiet() {
  const [playerDietPlan, setPlayerDietPlan] = useState([]);
  const [playerName, setPlayerName] = useState([]);
  const [search, setsearch] = useState("");

  const params = useParams();

  useEffect(() => {
    async function fetchPlayerDietData() {
      const response = await fetch(
        `http://localhost:5012/api/breakfastPlan/getBreakfastPlayerDetails/${params.playerID}`
      );
      if (!response.ok) {
        window.alert(`${params.id.toString()}`);
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      records.forEach((dietPlan) => {
        if (dietPlan.type == "Breakfast") {
          playerDietPlan.push(dietPlan);
        }
      });
      setPlayerDietPlan(records);
      setPlayerName(records.playerName);
      console.log(records);
    }
    fetchPlayerDietData();
  }, [params.id]);

  const dateFormat = (date) => {
    const ndate = new Date(date);
    const newDate = ndate.toISOString().substr(0, 10);
    return newDate;
  };

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 70 }}>
        <center>
          <h1>View Breakfast Diet Plans Provided by dietitian</h1>
          <h1>{playerName}</h1>
        </center>

        <div>
          <input
            style={{
              marginLeft: "100px",
              height: "40px",
              width: "250px",
              borderRadius: "35px",
              backgroundColor: "lightgrey",
            }}
            type="search"
            placeholder="   Search for Diet Plans ..."
            name="searchQuery"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          ></input>
          <br />
          <br />
        </div>
        <center>
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.17)",
              padding: 10,
            }}
          >
            <tr>
              <th
                style={{
                  border: "1px solid",
                  padding: "10px 100px 10px 100px",
                  backgroundColor: "rgb(15, 15, 15,0.9)",
                  color: "white",
                }}
              >
                Diet_ID
              </th>
              <th
                style={{
                  border: "1px solid",
                  padding: "0 40px 0 40px",
                  backgroundColor: "rgb(15, 15, 15,0.9)",
                  color: "white",
                }}
              >
                Diet_Date
              </th>

              <th
                style={{
                  border: "1px solid",
                  padding: "0 100px 0 100px",
                  backgroundColor: "rgb(15, 15, 15,0.9)",
                  color: "white",
                }}
              >
                Diet_Description
              </th>

              <th
                style={{
                  border: "1px solid",
                  padding: "0 50px 0 50px",
                  backgroundColor: "rgb(15, 15, 15,0.9)",
                  color: "white",
                }}
              >
                Total_Calories
              </th>
              <th
                style={{
                  border: "1px solid",
                  padding: "10px 50px 10px 50px",
                  backgroundColor: "rgb(15, 15, 15,0.9)",
                  color: "white",
                }}
              >
                Total_Fat
              </th>
              <th
                style={{
                  border: "1px solid",
                  padding: "10px 50px 10px 50px",
                  backgroundColor: "rgb(15, 15, 15,0.9)",
                  color: "white",
                }}
              >
                Total_Protein
              </th>
            </tr>
            <tbody>
              {playerDietPlan.map((breakfastDiet) => {
                return breakfastDiet.dietPlan
                  .filter((diet) => {
                    if (search === "") {
                      return diet;
                    } else if (
                      (diet.dietID.toLowerCase().includes(search.toLowerCase()),
                      diet.dietDescription
                        .toLowerCase()
                        .includes(search.toLowerCase()),
                      diet.date.toLowerCase().includes(search.toLowerCase()))
                    ) {
                      return diet;
                    }
                  })

                  .map((diet) => {
                    return (
                      <tr>
                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                            height: "70px",
                          }}
                        >
                          {diet.dietID}
                        </td>
                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                          }}
                        >
                          {dateFormat(diet.date)}
                        </td>
                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                          }}
                        >
                          {diet.dietDescription}
                        </td>

                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                          }}
                        >
                          {diet.totalCalories}
                        </td>
                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                          }}
                        >
                          {diet.totalFat}
                        </td>
                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                          }}
                        >
                          {diet.totalProtien}
                        </td>
                      </tr>
                    );
                  });
              })}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}

export default AdminViewBrekfastDiet;
