import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="p-1">
        {/* <div className="flex flex-space-evenly align-item-center flex-wrap">

        </div> */}
        <p className="color-white text-center">
          Recamp | Made with React | ©{" "}
          <a
            href="https://purvasharma.netlify.app/"
            className="link color-white"
          >
            Purva Sharma{" "}
          </a>
          |
        </p>

        <p className="text-center color-white">
            Follow me on :
            <a
              href="https://www.instagram.com/purva.codes/"
              className="p-1 color-white"
            >
              <BsInstagram />
            </a>
            <a
              href="https://twitter.com/Purva_Sharma__"
              className="p-1 color-white"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/purva-sharma1999/"
              className="p-1 color-white"
            >
              <BsLinkedin />
            </a>
          </p>

      </footer>
    </>
  );
}

export default Footer;
