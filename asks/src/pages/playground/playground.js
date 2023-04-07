import "./playground.css";

import { useParams } from "react-router-dom";
import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

const Playground = () => {
  const params = useParams()
  const workId = params.workId
  return (
    <>dEtaiuls {workId}</>
  );
};

export default Playground;
