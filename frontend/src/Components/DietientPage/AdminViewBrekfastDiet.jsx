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
        `http://localhost:5012/api/breakfastPlan/getBreakfastPlayerDetails/${params.playerID.toString()}`
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

  async function deleteDiet(playerIDAndDietID) {
    try {
      const [playerID, dietID] = playerIDAndDietID.split("-");
      window.alert(playerID + dietID);

      await axios.delete(
        `http://localhost:5012/api/breakfastPlan/deleteBreakfastPlayerDetails/${playerID}/${dietID}`
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 70 }}>
        <center>
          <h1>View Breakfast Diet Plan of Player</h1>
          <h1>{playerName}</h1>
        </center>
        <button
          style={{
            float: "right",
            backgroundColor: "rgb(0, 150, 255)",
            color: "white",
            padding: "14px",
            width: 200,
            fontWeight: "bold",
            borderRadius: "20px",
          }}
        >
          <Link
            to={`/createNewDietPlan/${params.playerID.toString()}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            Create New Diet Plan
          </Link>
        </button>
        <br /> <br />
        <br />
        <br />
        <br />
        <div>
          <input
            style={{
              marginLeft: "60px",
              height: "50px",
              width: "250px",
              borderRadius: "35px",
              backgroundColor: "lightgrey",
            }}
            type="search"
            placeholder="   Search for DietPlans ..."
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
                  padding: "15px 100px 15px 100px",
                  backgroundColor: "lightgreen",
                }}
              >
                Diet_ID
              </th>
              <th
                style={{
                  border: "1px solid",
                  padding: "0 40px 0 40px",
                  backgroundColor: "lightgreen",
                }}
              >
                Diet_Date
              </th>

              <th
                style={{
                  border: "1px solid",
                  padding: "0 100px 0 100px",
                  backgroundColor: "lightgreen",
                }}
              >
                Diet_Description
              </th>

              <th
                style={{
                  border: "1px solid",
                  padding: "0 40px 0 40px",
                  backgroundColor: "lightgreen",
                }}
              >
                Total_Calories
              </th>
              <th
                style={{
                  border: "1px solid",
                  padding: "15px 40px 15px 40px",
                  backgroundColor: "lightgreen",
                }}
              >
                Total_Fat
              </th>
              <th
                style={{
                  border: "1px solid",
                  backgroundColor: "lightgreen",
                  padding: "0 40px 0 40px",
                }}
              >
                Total_Protein
              </th>
              <th
                style={{
                  border: "1px solid",
                  backgroundColor: "lightgreen",
                  padding: "0 40px 0 40px",
                }}
              >
                Action
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
                        .includes(search.toLowerCase()))
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

                        <td
                          style={{
                            boxShadow: "0 0 30px rgba(0, 0, 0, 0.25),",
                            border: "1px solid black",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              padding: 10,
                              width: 80,
                            }}
                            onClick={() => {
                              deleteDiet(
                                `${breakfastDiet.playerID}-${diet.dietID}`
                              );
                            }}
                          >
                            Delete
                          </button>
                          &nbsp;&nbsp;&nbsp;
                          <button
                            style={{
                              backgroundColor: "goldenrod",
                              color: "white",
                              padding: 10,
                              width: 80,
                            }}
                          >
                            <Link
                              to={`/editDietPlan/${diet._id}`}
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Edit
                            </Link>
                          </button>
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
