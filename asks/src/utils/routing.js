import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Nav from "../Pages/nav/nav";
import Home from "../Pages/home/home";

const Routing = () => {
  const path = window.location.pathname;
  return (
    <Router>
      {/* body: */}
      <div className="body">
        <div className="container">
          <div className="row">
            <Routes>
              {/* home route */}
              <Route exact path="/nav" element={<Nav />} />
              <Route exact path="/" element={<Home />} />

              {/* default routes for invalid links */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Routing;
