import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  const storage = window.sessionStorage;

  useEffect(() => {
    var nameget = storage.getItem("name");
    var useridget = storage.getItem("user_id");
    console.log(nameget, useridget);

    if ((nameget && useridget) == null) {
      window.location.reload();
      nameget = window.prompt("Enter username");
      useridget = uuidv4();
      storage.setItem("name", nameget);
      storage.setItem("user_id", useridget);
    }
  });

  return (
    <div>
      Home
      <Box>
        <Link to={"/auctions"}>
          {" "}
          <Button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "1%",
              fontSize: "17px",
              margin: "1%",
            }}
          >
            Go To Auction
          </Button>
        </Link>
      </Box>
    </div>
  );
};
