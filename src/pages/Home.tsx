import { Box } from "@mui/material";
import React from "react";
import User from "../components/User";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem"
      }}
    >
      <User />
    </Box>
  );
};
export default Home;
