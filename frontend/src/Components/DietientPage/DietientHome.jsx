import React from "react";
import { Link } from "react-router-dom";

function dietientHome() {
  return (
    <div>
      <h1>DietientHome Page</h1>
      <br />
      <div className="outer">
        <div className="inner">
          <div
            style={{
              display: "inline-block",
              padding: "40px",
              margin: 50,
              border: "1px solid white",
            }}
          >
            <img
              src="https://www.pinesingleton.com/images/slider/cache/1d1f861efafd4c2e5b68704fa616acf6/breakfast.jpg"
              style={{
                height: "300px",
                width: "500px",
              }}
            />
            <br />
            <button>
              <Link to="/breakfastDietPlan">Breakfast</Link>
            </button>
            <br />
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "40px",

              border: "1px solid white",
            }}
          >
            <img
              src="https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2-1200x900.png"
              style={{ height: "300px", width: "500px" }}
            />
            <br />
            <button>Lunch</button>
            <br />
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "40px",
              border: "1px solid white",
            }}
          >
            <img
              src="https://www.thesun.co.uk/wp-content/uploads/2021/12/Turkey-Christmas-Dinner-_-Trimmings.jpeg?strip=all&w=960&quality=100"
              style={{ height: "300px", width: "500px" }}
            />
            <br />
            <button>Dinner</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dietientHome;
