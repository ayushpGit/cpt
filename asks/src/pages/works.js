import React, { useState, useEffect } from "react";

import Nav from "../components/nav";
import Footer from "../components/footer";
import Cards from "../components/works/cards";
import Play from "./playground/playground";

const Works = () => {
  const [workItems, setWorkItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/works")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWorkItems(data);
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
        {/* <Cards /> */}
        {workItems ? <Play workItems={workItems} /> : <p>Loading...</p>}
      </div>
      <Footer />
    </>
  );
};

export default Works;
