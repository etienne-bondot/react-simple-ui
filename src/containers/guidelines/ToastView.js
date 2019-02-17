import React, { Fragment } from "react";
import { toast } from "react-toastify";

import View from "../View";
import Button from "../../components/button/Button";

import { COLORS } from "../../constants";

const TOAST_TYPE = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  CUSTOM: "custom"
};

const POSITION = {
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center",
  BOTTOM_LEFT: "bottom-left"
};

const ToastView = ({ ...props }) => {
  const notify = (
    type = TOAST_TYPE.DEFAULT,
    position = POSITION.TOP_RIGHT,
    custom = { background: COLORS.BLACK }
  ) => {
    switch (type) {
      case TOAST_TYPE.SUCCESS:
        toast.success("Success Notification");
        break;
      case TOAST_TYPE.ERROR:
        toast.error("Error Notification");
        break;
      case TOAST_TYPE.WARN:
        toast.warn("Warning Notification");
        break;
      case TOAST_TYPE.INFO:
        toast.info("Informative Notification");
        break;
      case TOAST_TYPE.CUSTOM:
        toast("Custom Style Notification !", {
          position: position,
          className: custom
        });
        break;
      case TOAST_TYPE.DEFAULT:
      default:
        toast("Default Notification !");
    }
  };

  const _toastView = {
    title: "Toast",
    sections: [
      {
        title: "Description",
        desc: (
          <p>
            The <strong>Toast</strong> component comes from the{" "}
            <strong>
              <a
                href="https://github.com/fkhadra/react-toastify"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-toastify
              </a>
            </strong>{" "}
            package. Read the official documentation for more information about
            it.
          </p>
        )
      },
      {
        title: "Toast Types",
        children: (
          <Fragment>
            <Button onClick={() => notify(TOAST_TYPE.DEFAULT)}>default</Button>
            <Button onClick={() => notify(TOAST_TYPE.SUCCESS)}>success</Button>
            <Button onClick={() => notify(TOAST_TYPE.ERROR)}>error</Button>
            <Button onClick={() => notify(TOAST_TYPE.WARN)}>warning</Button>
            <Button onClick={() => notify(TOAST_TYPE.INFO)}>info</Button>
            <Button onClick={() => notify(TOAST_TYPE.CUSTOM)}>custom</Button>
          </Fragment>
        )
      },
      {
        title: "Toast Positions",
        children: (
          <Fragment>
            <Button
              onClick={() => notify(TOAST_TYPE.CUSTOM, POSITION.TOP_RIGHT, {})}
            >
              top-right
            </Button>
            <Button
              onClick={() => notify(TOAST_TYPE.CUSTOM, POSITION.TOP_CENTER, {})}
            >
              top-center
            </Button>
            <Button
              onClick={() => notify(TOAST_TYPE.CUSTOM, POSITION.TOP_LEFT, {})}
            >
              top-left
            </Button>
            <Button
              onClick={() =>
                notify(TOAST_TYPE.CUSTOM, POSITION.BOTTOM_RIGHT, {})
              }
            >
              bottom-right
            </Button>
            <Button
              onClick={() =>
                notify(TOAST_TYPE.CUSTOM, POSITION.BOTTOM_CENTER, {})
              }
            >
              bottom-center
            </Button>
            <Button
              onClick={() =>
                notify(TOAST_TYPE.CUSTOM, POSITION.BOTTOM_LEFT, {})
              }
            >
              bottom-left
            </Button>
          </Fragment>
        )
      }
    ]
  };

  return (
    <View
      title={_toastView.title}
      sections={_toastView.sections}
      properties={_toastView.properties}
      {...props}
    />
  );
};

export default ToastView;
