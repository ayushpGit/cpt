import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";

const SubWorks = () => {
  const { id } = useParams();
  const { data: work, error } = useFetch("http://localhost:8000/works/" + id);
  return (
    <>
      <Nav />
      {work ? (
        <div className="container pt-5">
          <div className="row">
            {/* left */}
            <div className="col-lg-6 works-top-left">
              {/* title */}
              <h2 className="sub-heading pb-2 caps">{work.category}</h2>
              <h1 className="heading capital">
                {work.title} — {work.titleDesc}
              </h1>
              {/* role */}
              <h2 className="sub-heading pb-2 pt-5 caps">Our role</h2>
              <ul
                className="bold-text small"
                style={{
                  padding: "0",
                }}
              >
                <li>Creative Direction </li>
                <li>UX / UI</li>
                <li>Website Design</li>
                <li>Icon Design</li>
              </ul>
              {/* client */}
              <h2 className="sub-heading pb-2 pt-5 caps">Client</h2>
              <div className="bold-text small">{work.title}</div>
              {/* year */}
              <h2 className="sub-heading pb-2 pt-5 caps">Year</h2>
              <div className="bold-text small">{work.date}</div>
            </div>

            {/* right */}
            <div className="col-lg-6 works-top-right">
              <p className="works-p">{work.desc}</p>
            </div>

            {/* bottom */}
            <div className="col-12 pt-5">
              {/* <img
                className="subworks-img"
                src={require(`../../assets/images/${work.img}-inside.jpg`)}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </>
  );
};

export default SubWorks;
