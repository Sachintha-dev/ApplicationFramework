import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function AdminViewBrekfastDiet() {
  const [playerDietPlan, setPlayerDietPlan] = useState([]);
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
      <h2>View Breakfast Diet Plan of Player</h2>
      <button style={{ float: "right" }}>
        <Link to={`/createNewDietPlan/${params.playerID.toString()}`}>
          Create New Diet Plan
        </Link>
      </button>
      <br /> <br />
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
          {playerDietPlan.map((breakfastDiet) => {
            return breakfastDiet.dietPlan.map((diet) => {
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

                  <td>
                    <button
                      style={{ backgroundColor: "red", color: "white" }}
                      onClick={() => {
                        deleteDiet(`${breakfastDiet.playerID}-${diet.dietID}`);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
          })}
        </table>
      </center>
    </div>
  );
}

export default AdminViewBrekfastDiet;
