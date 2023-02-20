import "./components-style.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="col-md-6">
          <p className="nav-crocus">Crocus Pearl</p>
          <p className="nav-tech">technologies</p>
        </div>
        <div className="nav-right">
          <a className="nav-works" href="#!">
            Works
          </a>
          <CgMenuRight className="nav-menu" onClick={toggleOverlay} />
        </div>
      </nav>

      {isOpen && (
        <div className="overlay">
          <div className="overlay__controls">
            <RxCross2 className="overlay__close" onClick={toggleOverlay} />
          </div>
          <div className="overlay__content">
            <h1>Content in overlay</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
