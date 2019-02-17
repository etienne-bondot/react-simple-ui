import React from "react";

import "./Content.css";
import { STYLES } from "../constants";

const contentWrapperStyle = {
  width: "100%",
  height: "100%",
  marginTop: STYLES.NAVBAR.HEIGHT
};

const contentStyle = {
  margin: "auto"
};

const Content = ({ children }) => (
  <div className="ContentWrapper" style={{ ...contentWrapperStyle }}>
    <div className="Content" style={{ ...contentStyle }}>
      {children}
    </div>
  </div>
);

export default Content;
