import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "../src/Components/SideBar/SideBar";
import "./App.css";
import CricketerDietplanHome from "./components/CricketerPage/CricketerDietplanHome";
import DietientHome from "./components/DietientPage/DietientHome";
//import CricketerDietplanHome from "./components/CricketerPage/CricketerDietplanHome";
import AdminBreakfastDietPlan from "./components/DietientPage/AdminBreakfastDietPlan";
import AdminViewBrekfastDiet from "./components/DietientPage/AdminViewBrekfastDiet";
import AdminCreateBrekfastDiet from "./components/DietientPage/AdminCreateBrekfastDiet";
import Chatbot from "./Components/ChatBot/Chatbot";
import AdminEditBreakfastDetails from "./components/DietientPage/AdminEditBreakfastDetails";
import ViewCurrentDietPlans from "./components/CricketerPage/ViewCurrentDietPlans";
import CreateTakenMeal from "./components/CricketerPage/CreateTakenMeal";
import DietPlanProvided from "./components/CricketerPage/DietPlanProvided";
import EditTakenMeal from "./components/CricketerPage/EditTakenMeal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/" exact element={<DietientHome />} />
          <Route path="/adminhome" exact element={<DietientHome />} />
          <Route
            path="/playerDietPlan"
            exact
            element={<AdminBreakfastDietPlan />}
          />

          <Route
            path="/playerDietPlan/:playerID"
            exact
            element={<AdminViewBrekfastDiet />}
          />

          <Route
            path="/createNewDietPlan/"
            exact
            element={<AdminCreateBrekfastDiet />}
          />

          <Route
            path="/createNewDietPlan/:playerID/"
            exact
            element={<AdminCreateBrekfastDiet />}
          />

          <Route
            path="/cricketerDietPlan/:playerID/"
            exact
            element={<CricketerDietplanHome />}
          />

          <Route
            path="/editDietPlan/:dietID"
            exact
            element={<AdminEditBreakfastDetails />}
          />

          <Route
            path="/cricketerDietPlan/viewMealPlan/:playerID"
            exact
            element={<ViewCurrentDietPlans />}
          />

          <Route
            path="/cricketerDietPlan/addMealPlan/"
            exact
            element={<CreateTakenMeal />}
          />

          <Route
            path="/cricketerDietPlan/viewDietPlan/:playerID"
            exact
            element={<DietPlanProvided />}
          />

          <Route
            path="/cricketerDietPlan/editMealPlan/:id"
            exact
            element={<EditTakenMeal />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
