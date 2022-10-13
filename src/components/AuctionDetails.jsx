import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

export const AuctionDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const storage = window.sessionStorage;
  const navigate = useNavigate;
  const getDataS = () => {
    axios.get(`https://fkapi-420.herokuapp.com/data/${id}`).then((data) => {
      setData(data.data);
    });
  };
  const [user, setUser] = useState("");
  useEffect(() => {
    getDataS();
    var nameget = storage.getItem("name");
    setUser(nameget);
  }, []);
  console.log(data);

  const [bid, setBid] = useState(0);

  const handleClickCreate = () => {
    var newBid = window.prompt("Enter New Bid");
    setBid(newBid);
    data.Bids = newBid;

    axios(`https://fkapi-420.herokuapp.com/data/${id}`, {
      method: "PUT",
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        getDataS();
        console.log("upadate successful", res);
        setData(res.data);
      })
      .catch((error) => console.log("Something went wrong"));

    console.log(data);
  };

  return (
    <>
      <Box margin={"auto"} width="60%" height="600px">
        <Button
          onClick={() => {
            handleClickCreate();
          }}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "1%",
            fontSize: "17px",
            margin: "1%",
          }}
        >
          Create New Bid
        </Button>

        <Box margin={"auto"} width="80px" height="80px" boxSize="sm">
          <Image
            borderRadius={"10px"}
            width="100%"
            height="100%"
            border={"2px solid red"}
            src={data.Img_url}
            alt="imges"
          />
        </Box>
        <Box textAlign={"left"}>
          <Box display={"flex"}>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Name:-
            </Text>
            <Text fontSize="3xl">{data.Name}</Text>
          </Box>
          <Box display={"flex"}>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Quantity:-
            </Text>
            <Text fontSize="3xl">{data.Quantity}</Text>
          </Box>
          <Box display={"flex"}>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Bids:-
            </Text>
            <Text fontSize="3xl">{data.Bids}</Text>
          </Box>
          <Box textAlign={"left"} display={"flex"}>
            {user ? (
              <>
                {" "}
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  User_name:-{" "}
                </Text>
                <Text fontSize="3xl">{user}</Text>
              </>
            ) : (
              ""
            )}
          </Box>

          <Box display={"flex"}>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Description:-
            </Text>
            <Text fontSize="3xl">{data.Desc}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
