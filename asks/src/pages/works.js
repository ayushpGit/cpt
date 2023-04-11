import React, { useState, useEffect } from "react";

import Nav from "../components/nav";
import Footer from "../components/footer";
import Cards from "../components/works/cards";
import Play from "./playground/playground";

const Works = () => {
  const [workItems, setWorkItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/wosrks")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Can not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setWorkItems(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container pt-5">
        <p className="sub-heading">SELECTED PROJECTS</p>
        <h1 className="heading large" style={{ fontSize: "6rem" }}>
          Digital Portfolio
        </h1>

        {/* displaying work items but if theres an error it renders the error and if it is loading it renders loading */}

        {workItems ? (
          <Play workItems={workItems} />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Works;
