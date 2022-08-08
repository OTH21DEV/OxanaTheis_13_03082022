import "../../../src/App.css";

import React from "react";

const FeatureItem = (props) => {
  return (
    <div class="feature-item">
      <img src={props.icon} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default FeatureItem;
