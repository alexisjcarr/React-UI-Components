import React from "react";
import "./Card.scss";

import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
  return (
    <div className="CardContainer">
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
