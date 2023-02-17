import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
// import Nav from "../components/nav";
import Foot from "../components/footer";
import Home from "../pages/home";
import Play from "../pages/playground/playground";

const Routing = () => {
  const path = window.location.pathname;
  return (
    <Router>
      {/* body: */}
      <div className="body">
        <Routes>
          {/* home route */}
          {/* <Route exact path="/nav" element={<Nav />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/playground" element={<Play />} />
          <Route exact path="/foot" element={<Foot />} />

          {/* default routes for invalid links */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
