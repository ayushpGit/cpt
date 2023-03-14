import "./playground.css";
import React from "react";

const Playground = () => {
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
    <div>
      <input type="checkbox" id="ham-menu" />
      <label for="ham-menu">
        <div class="hide-des">
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </div>
      </label>
      {/* <!-- <div class="full-page-green"></div> --> */}
      <div class="ham-menu">
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
    </div>
  );
};

export default Playground;
