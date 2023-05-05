import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

function dietientHome() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom , #dce8fc, #a1cad4)",
      }}
    >
      <SideBar />
      <center>
        <h1>Welcome to Dietient Home Page !!!</h1>
      </center>
      <br />

      <h2 style={{ marginLeft: 100 }}>Please select the Diet Type</h2>
      <br />
      <div className="outer" style={{ marginLeft: 100 }}>
        <div className="inner">
          <div
            style={{
              display: "inline-block",
              padding: "32px",
              margin: 50,
              border: "1px solid black",
              backgroundColor: "rgb(183, 193, 196,0.5)",
              boxShadow: "0 0 10px rgba(0,0,0,0.4)",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "50px",
              borderRadius: "20px",
              borderStyle: "inset",
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
            <br />
            <center>
              <button
                style={{
                  height: "40px",
                  width: "150px",
                  backgroundColor: "#da88f7",
                  texAlign: "center",
                }}
              >
                <Link
                  to="/breakfastDietPlan"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "40",
                    color: "black",
                  }}
                >
                  Breakfast
                </Link>
              </button>
            </center>
          </div>

          <div
            style={{
              display: "inline-block",
              padding: "32px",
              margin: 50,
              border: "1px solid black",
              backgroundColor: "rgb(183, 193, 196,0.5)",
              boxShadow: "0 0 10px rgba(0,0,0,0.4)",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "50px",
              borderRadius: "20px",
              borderStyle: "inset",
            }}
          >
            <img
              src="https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2-1200x900.png"
              style={{ height: "300px", width: "500px" }}
            />
            <br />
            <br />
            <center>
              <button
                style={{
                  height: "40px",
                  width: "150px",
                  backgroundColor: "#da88f7",
                  texAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Lunch
              </button>
            </center>
          </div>

          <center>
            <div
              style={{
                display: "inline-block",
                padding: "32px",
                margin: 50,
                border: "1px solid black",
                backgroundColor: "rgb(183, 193, 196,0.5)",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "50px",
                borderRadius: "20px",
                borderStyle: "inset",
              }}
            >
              <img
                src="https://www.thesun.co.uk/wp-content/uploads/2021/12/Turkey-Christmas-Dinner-_-Trimmings.jpeg?strip=all&w=960&quality=100"
                style={{ height: "300px", width: "500px" }}
              />
              <br />
              <br />
              <center>
                <button
                  style={{
                    height: "40px",
                    width: "150px",
                    backgroundColor: "#da88f7",
                    texAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Dinner
                </button>
              </center>
              <br />
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default dietientHome;
