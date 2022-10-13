import React, { useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/AppReducer/action";

export const Auction = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Box
        style={{
          width: "60%",
          height: "auto",
          border: "1px solid blue",
          margin: "auto",
        }}
      >
        <Table className="table" border="1">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Quantity</Th>
              <Th>Bids</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody className="tbody">
            {data.map((data, index) => {
              return (
                <Tr key={uuidv4()} className="row">
                  <Td className="first_name">{index + 1}</Td>
                  <Td className="first_name">{data.Name}</Td>
                  <Td className="email">{data.Quantity}</Td>
                  <Td className="gender">{data.Bids}</Td>

                  <Td>
                    <Link to={`/auctions/${data.id}`}>
                      <button><i className="fa-solid fa-eye"></i></button>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};
