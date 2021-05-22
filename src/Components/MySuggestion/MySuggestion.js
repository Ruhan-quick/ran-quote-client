import React, { createContext, useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import NavBar from "../Navs/NavBar";
import "./MySuggestion.css";
const MySuggestion = () => {
  const [squote, setSquote] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://50wzgh.deta.dev/randomquote")
      .then((res) => res.json())
      .then((data) => {
        setSquote(data);
        console.log(data);
      });
  }, []);

  const generateNewQuote = () => {
    fetch("https://50wzgh.deta.dev/randomquote")
      .then((res) => res.json())
      .then((data) => {
        setSquote(data);
        console.log(data);
      });
  };

  const handleSave = () => {
    const email = loggedInUser.email;
    const dataTs = { email, ...squote };
    console.log("dataTs", dataTs);
    fetch("http://localhost:5000/saveQuote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataTs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Saved successfully.");
      });
  };

  console.log("setted data", squote.author);

  return (
    <div className="container">
      <NavBar></NavBar>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={generateNewQuote}
          className="ml-3 mt-5"
          variant="outline-secondary"
        >
          Generate Random Quote
        </Button>{" "}
      </div>
      <div className="mysugstyle">
        <div style={{ textAlign: "center" }}>
          {!squote.author && (
            <Spinner
              style={{ marginTop: "20px" }}
              animation="grow"
              variant="secondary"
              size="lg"
            />
          )}
        </div>
        <h2>{squote.text}</h2>
        <h4>{squote.author}</h4>
        <h5>{squote.source}</h5>
        <div className="row likeSave mt-4">
          <div className="col-6 like">
            <h5>Like</h5>
          </div>
          <div onClick={handleSave} className="col-6 save">
            <h5>Save</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySuggestion;
