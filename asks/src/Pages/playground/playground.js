import "./playground.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOverlay = () => {
    // console.log("Before"+isOpen);
    setIsOpen(!isOpen);
    // console.log("After"+isOpen);
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Works",
      link: "/",
    },
    {
      name: "Case Studies",
      link: "/",
    },
    {
      name: "Expertise",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <>
      {/* <nav>
        <div className="col-md-6 nav-logo">
          <p className="nav-crocus">crocus pearl</p>
          <p className="nav-tech">technologies</p>
        </div>
        <div className="nav-right">
          <a className="nav-works" href="#!">
            Works
          </a>
          <CgMenuRight className="nav-menu" onClick={toggleOverlay} />
        </div>
      </nav> */}
      <header>
        <input type="checkbox" id="menuToggle" />
        <label id="burger" for="menuToggle">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <nav id="menuu"></nav>
      </header>
      {isOpen && (
        <div className={isOpen ? "overlay active" : "overlay"}>
          <div className="overlay__controls">
            <RxCross2 className="overlay__close" onClick={toggleOverlay} />
          </div>
          <div className="overlay__content">
            <div className="nav-container-1">
              <p>menu</p>
            </div>

            <div className="nav-container-2">
              {menuItems.map((menuItem) => (
                <a className="menu-items" href={menuItem.link}>
                  {menuItem.name}
                </a>
              ))}
            </div>

            <div className="nav-container-3">
              <p className="nav-address sub-heading">nepal</p>
              <p className="nav-address">khusibun, kathmandu</p>
              <a href="mailto:projects@crocuspearl.com" className="nav-email">
                projects@crocuspearl.com
              </a>
              <a href="/" className="nav-privacy">
                Privacy Policy
              </a>
              <div className="nav-socials">
                <p className="sub-heading">Social</p>
                <a
                  href="https://www.facebook.com/people/Crocus-Pearl-Technologies-Pvt-Ltd/100088528600904/?mibextid=ZbWKwL"
                  // className="link-button"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/crocus.pearl/"
                  // className="link-button"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/crocus-pearl-technologies-pvt-ltd/mycompany/"
                  // className="link-button"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
