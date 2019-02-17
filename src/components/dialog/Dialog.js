import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10
};

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  padding: "2em",
  position: "relative",
  color: "#5f5f5f",
  minWidth: "40%"
};

const closeActionStyle = {
  position: "absolute",
  top: 5,
  right: 5,
  cursor: "pointer"
};

const Dialog = ({ show = false, onClose, children, ...props }) => (
  <Fragment>
    {show ? (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={{ ...modalStyle, ...props.style }}>
          {children}
          <div style={closeActionStyle} onClick={onClose}>
            <FontAwesomeIcon icon="times" alt="Close" />
          </div>
        </div>
      </div>
    ) : null}
  </Fragment>
);

Dialog.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Dialog;
