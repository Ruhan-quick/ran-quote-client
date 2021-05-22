import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import NavBar from "../Navs/NavBar";

const SavedQuotes = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://quiet-waters-49071.herokuapp.com/savedquotes?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setSavedQuotes(data));
  }, []);
  console.log("saved quotes here", savedQuotes);
  return (
    <div className="container">
      <NavBar></NavBar>
      {/* {<h1>{savedQuotes.length}</h1>} */}

      <h1 style={{ textAlign: "center" }}>My Quotes</h1>
      {savedQuotes.map((s) => (
        <div>
          <div className="cardStyle">
            <h4>"{s.text}"</h4>
            <h5 style={{ textAlign: "right", marginRight: "20px" }}>
              {s.author}
            </h5>
            <h6 className="pb-2">Source: {s.source}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedQuotes;
