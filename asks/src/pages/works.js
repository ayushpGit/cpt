import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Cards from "../components/works/cards";

const Works = () => {
  return (
    <>
      <Nav />
      <div className="container pt-5">
        <p className="sub-heading">SELECTED PROJECTS</p>
        <h1 className="heading large" style={{ fontSize: "6rem" }}>
          Digital Portfolio
        </h1>
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Works;
