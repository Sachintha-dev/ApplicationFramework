import React from "react";

function AdminViewBrekfastDiet() {
  const [playerDietPlan, setPlayerDietPlan] = useState([]);

  useEffect(() => {
    async function fetchPlayerDietData() {
      const response = await fetch(
        `http://localhost:5012/api/breakfastPlan/getBreakfastPlayerDetails/${params.id.toString()}`
      );
      if (!response.ok) {
        window.alert(`${params.id.toString()}`);
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      console.log(records);
      setPlayerDietPlan(response.data);
    }
    fetchPlayerDietData();
  }, []);

  return (
    <div>
      AdminViewBrekfastDiet
      <h2>Dietient Page for View Breakfast Diet Plan of Player</h2>
    </div>
  );
}

export default AdminViewBrekfastDiet;
