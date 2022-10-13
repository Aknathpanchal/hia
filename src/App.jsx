import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Auction } from "./components/Auction";
import { AuctionDetails } from "./components/AuctionDetails";
import { Home } from "./components/Home";
import { v4 as uuidv4 } from "uuid";

function App() {
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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auction />} />
        <Route path="/auctions/:id" element={<AuctionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
