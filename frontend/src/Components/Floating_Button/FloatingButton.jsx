import React from "react";
import Fab from "@mui/material/Fab";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function Button() {
  return (
    <div>
      <Fab
        style={{
          display: "fixed",
          position: "fixed",
          marginTop: 560,
          marginLeft: 1360,
          backgroundColor: "#002147",
          color: "white",
        }}
      >
        <EmailRoundedIcon />
      </Fab>
    </div>
  );
}

export default Button;