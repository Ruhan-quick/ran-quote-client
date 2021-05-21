import React from "react";
import NavBar from "../Navs/NavBar";
import AllQuotes from "./AllQuotes/AllQuotes";

const Home = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <AllQuotes></AllQuotes>
    </div>
  );
};

export default Home;
