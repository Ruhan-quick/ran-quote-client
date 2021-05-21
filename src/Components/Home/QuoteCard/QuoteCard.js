import React from "react";
import "./QuoteCard.css";
const QuoteCard = ({ author, text, source }) => {
  return (
    <div>
      <div className="cardStyle">
        <h4>"{text}"</h4>
        <h5 style={{ textAlign: "right", marginRight: "20px" }}>{author}</h5>
        <div className="row likeSave">
          <div className="col-6 like">
            <h5>Like</h5>
          </div>
          <div className="col-6 save">
            <h5>Save</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
