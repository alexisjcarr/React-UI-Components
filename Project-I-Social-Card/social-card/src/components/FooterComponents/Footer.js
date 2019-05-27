import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <span>
        <i className="far fa-comment"/>
      </span>{" "}
      <span>
        <i className="fas fa-retweet"/>
      </span>{" "}
      <span>
        <i className="far fa-heart"/>
      </span>{" "}
      <span>
        <i className="far fa-envelope"/>
      </span>
    </div>
  );
};

export default Footer;
