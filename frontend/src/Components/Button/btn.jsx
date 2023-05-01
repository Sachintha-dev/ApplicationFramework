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
          marginTop: 600,
          marginLeft: 1380,
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