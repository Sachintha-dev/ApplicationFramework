import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Chart from "chart.js/auto";

function CricketerDietplanHome() {
  const [cricketerDietPlan, setcricketerDietPlan] = useState([]);
  const params = useParams();
  const chartContainer = useRef(null);

  useEffect(() => {
    async function fetchBreakfastDietPlan() {
      const response = await fetch(
        `http://localhost:5012/api/breakfastPlan/getBreakfastPlayerDetails/${params.playerID}`
      );
      if (!response.ok) {
        window.alert(`${params.id.toString()}`);
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(records);
      setcricketerDietPlan(records);
    }

    fetchBreakfastDietPlan();
  }, [params.playerID]);

  useEffect(() => {
    const chartData = {
      labels: cricketerDietPlan.map((diet) => diet.date),
      datasets: [
        {
          label: "Total Calories",
          data: cricketerDietPlan.reduce((acc, diet) => {
            diet.dietPlan.forEach((meal) => {
              if (acc[meal.date]) {
                acc[meal.date] += meal.totalCalories;
              } else {
                acc[meal.date] = meal.totalCalories;
              }
            });
            return acc;
          }, {}),
        },

        {
          label: "Total Protein",
          data: cricketerDietPlan.reduce((acc, diet) => {
            diet.dietPlan.forEach((meal) => {
              if (acc[meal.date]) {
                acc[meal.date] += meal.totalProtien;
              } else {
                acc[meal.date] = meal.totalProtien;
              }
            });
            return acc;
          }, {}),
        },

        {
          label: "Total Fat",
          data: cricketerDietPlan.reduce((acc, diet) => {
            diet.dietPlan.forEach((meal) => {
              if (acc[meal.date]) {
                acc[meal.date] += meal.totalFat;
              } else {
                acc[meal.date] = meal.totalFat;
              }
            });
            return acc;
          }, {}),
        },
      ],
    };

    if (
      chartContainer &&
      chartContainer.current &&
      cricketerDietPlan.length > 0
    ) {
      const chart = new Chart(chartContainer.current, {
        type: "bar",
        data: chartData,
        options: {
          aspectRatio: true,
        },
      });

      return () => chart.destroy();
    }
  }, [cricketerDietPlan]);

  return (
    <div>
      <h1>
        CricketerDietplanHome
        <canvas
          ref={chartContainer}
          style={{ height: "100px", width: "100px" }}
        />
      </h1>
    </div>
  );
}

export default CricketerDietplanHome;
