import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import QuoteCard from "../QuoteCard/QuoteCard";

const AllQuotes = () => {
  const [allQuotes, setAllQuotes] = useState([]);
  useEffect(() => {
    fetch("https://50wzgh.deta.dev/quotes")
      .then((res) => res.json())
      .then((data) => {
        setAllQuotes(data);
      });
  }, []);

  console.log(allQuotes);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button className="ml-3 mt-3" variant="outline-secondary">
          Suggest Me One
        </Button>{" "}
      </div>
      <div style={{ textAlign: "center" }}>
        {Object.keys(allQuotes).length == 0 && (
          <Spinner
            style={{ marginTop: "200px" }}
            animation="grow"
            variant="secondary"
            size="lg"
          />
        )}
      </div>
      {
        Object.entries(allQuotes).map((al) => (
          // <h2 key={Math.random()}>
          //   {al[0]} {al[1].author}
          // </h2>
          <QuoteCard
            key={Math.random()}
            author={al[1].author}
            text={al[1].text}
            source={al[1].source}
          ></QuoteCard>
        ))

        // forEach((quotes) => {
        //   console.log(quotes[1].author);
        //   <h1>{quotes[1].author}</h1>;
      }
    </div>
  );
};

export default AllQuotes;
