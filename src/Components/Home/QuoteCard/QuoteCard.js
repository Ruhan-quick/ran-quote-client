import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "./QuoteCard.css";
const QuoteCard = ({ author, text, source }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleSave = () => {
    const email = loggedInUser.email;
    const dataTs = { email, author, text, source };
    console.log("dataTs", dataTs);
    fetch("https://quiet-waters-49071.herokuapp.com/saveQuote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataTs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Saved Successfully");
      });
  };
  const handleSaveControl = () => {
    if (loggedInUser.email) {
      handleSave();
    } else {
      alert("Please Login to Save.");
    }
  };
  const handleLikeControl = () => {
    alert("Like functionality is not added yet.");
  };
  return (
    <div>
      <div className="cardStyle">
        <h4>"{text}"</h4>
        <h5 style={{ textAlign: "right", marginRight: "20px" }}>{author}</h5>
        <div className="row likeSave">
          <div onClick={handleLikeControl} className="col-6 like">
            <h5>Like</h5>
          </div>
          <div onClick={handleSaveControl} className="col-6 save">
            <h5>Save</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
