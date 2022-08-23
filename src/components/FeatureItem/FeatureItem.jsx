import "../../../src/App.css";
import propTypes from "prop-types";

import React from "react";
/**
 *Displays the description section on the main page
 * @param {Object} props Section's information
 * @param {String} props.icon Section's icon (image )
 * @param {String} props.title Section's title
 * @param {String} props.content Section's content
 * @returns {JSX}
 */
const FeatureItem = (props) => {
  return (
    <div class="feature-item">
      <img src={props.icon} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  props: propTypes.shape({
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
  }),
};

export default FeatureItem;
