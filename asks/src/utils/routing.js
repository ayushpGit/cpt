import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
// import Nav from "../pages/nav/nav";
import Home from "../pages/home/home";

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

          {/* default routes for invalid links */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
