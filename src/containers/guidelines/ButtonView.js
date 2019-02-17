import React, { Fragment } from "react";
import { HashLink as Link } from "react-router-hash-link";

import View from "../View";
import Button from "../../components/button/Button";

const ButtonView = ({ ...props }) => {
  const _buttonView = {
    title: "Button",
    sections: [
      {
        title: "Button types",
        desc: "There are two standard types of buttons:",
        children: (
          <ul>
            <li>
              <Link to={`${props.location.pathname}#flat-button`}>
                Raised button
              </Link>
            </li>
            <li>
              <Link to={`${props.location.pathname}#raised-button`}>
                Flat button
              </Link>
            </li>
          </ul>
        )
      },
      {
        title: "Flat Button",
        children: (
          <Fragment>
            <Button style={{ marginRight: "1em" }}>Button</Button>
            <Button ripple={false} style={{ marginRight: "1em" }}>
              Button
            </Button>
            <Button disabled style={{ marginRight: "1em" }}>
              Button
            </Button>
          </Fragment>
        )
      },
      {
        title: "Raised Button",
        children: (
          <Fragment>
            <Button raised style={{ marginRight: "1em" }}>
              Button
            </Button>
            <Button raised ripple={false} style={{ marginRight: "1em" }}>
              Button
            </Button>
            <Button raised disabled style={{ marginRight: "1em" }}>
              Button
            </Button>
          </Fragment>
        )
      }
    ],
    properties: [
      {
        name: "onClick",
        type: "func",
        desc: "Fired when a click event is triggered"
      },
      {
        name: "disabled",
        type: "bool | false",
        desc: "Disable the button"
      },
      {
        name: "ripple",
        type: "bool | true",
        desc: "Add a ripple animation on click"
      },
      {
        name: "raised",
        type: "bool | false",
        desc: "Define the type of the button"
      },
      {
        name: "style",
        type: "object | null",
        desc: "Customize the button style"
      }
    ]
  };

  return (
    <View
      title={_buttonView.title}
      sections={_buttonView.sections}
      properties={_buttonView.properties}
      {...props}
    />
  );
};

export default ButtonView;
