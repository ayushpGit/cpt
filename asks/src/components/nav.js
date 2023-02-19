import "./components-style.css";
import { CgMenuRight } from "react-icons/cg";

const nav = () => {
  return (
    <>
    <nav>
      <div className="col-md-6">
        <p className="nav-crocus">Crocus Pearl</p>
        {/* <br /> */}
        <p className="nav-tech">technologies</p>
      </div>
      <div className="nav-right">
        <a className="nav-works" href="#!">
          Works
        </a>
        <CgMenuRight className="nav-menu" />
      </div>
    </nav>
    </>
  );
};

export default nav;
