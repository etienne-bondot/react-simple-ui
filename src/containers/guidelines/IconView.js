import React, { Fragment } from "react";

import View from "../View";
import Icon from "../../components/icon/Icon";

const preStyle = {
  backgroundColor: "#eee"
};

const IconView = ({ ...props }) => {
  const _iconView = {
    title: "Icon",
    sections: [
      {
        title: "Icon types",
        desc: (
          <Fragment>
            <p>
              The <strong>Icon</strong> component is a wrapper of the{" "}
              <span style={preStyle}>{`<FontAwesomeIcon/>`}</span> component.
            </p>
            <p>
              The <span style={preStyle}>fas</span> prefix (for Font Awesome
              Solid) is being inferred as the default. You do not need to prefix
              the icon name and can directly use the icon component like{" "}
              <span style={preStyle}>{`<Icon icon="check-square"/>`}</span>.
            </p>
            <p>
              For brand icons, we have to explicitly add the fab prefix to
              reference them. Those brand icons live in the package{" "}
              <span style={preStyle}>@fortawesome/fontawesome-free-brands</span>
              . So we need to specify a different prefix for them—not the
              default fas, but fab, for Font Awesome Brand.
            </p>
            <p>The icon prop expects a single object:</p>
            <ul>
              <li>
                It could be an icon object, like{" "}
                <span style={preStyle}>{`{faCoffee}`}</span>.
              </li>
              <li>
                It could a string object, like{" "}
                <span style={preStyle}>"coffee"</span>. (The curly braces around
                a string object supplied to a prop are optional.)
              </li>
              <li>
                Or it could be an Array of strings, where the first element is a
                prefix, and the second element is the icon name:{" "}
                <span style={preStyle}>{`{["fab", "apple"]}`}</span>.
              </li>
            </ul>
          </Fragment>
        ),
        children: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <Icon icon="coffee" />
            <Icon icon="coffee" size="2x" />
            <Icon icon="coffee" size="3x" />
            <Icon icon="coffee" size="4x" />
            <Icon icon="coffee" size="5x" />
          </div>
        )
      },
      {
        title: "Icon color",
        children: <Icon icon="coffee" size="3x" color="#b1b1b1" />
      },
      {
        title: "Icon spin",
        children: <Icon icon="coffee" size="3x" spin={true} />
      },
      {
        title: "Icon pulse",
        children: <Icon icon="coffee" size="3x" pulse={true} />
      },
      {
        title: "Icon border",
        children: <Icon icon="coffee" size="3x" border={true} />
      },
      {
        title: "Icon pull",
        children: <Icon icon="coffee" size="3x" pull="right" />
      },
      {
        title: "Icon flip",
        children: <Icon icon="coffee" size="3x" flip="horizontal" />
      },
      {
        title: "Icon rotation",
        children: <Icon icon="coffee" size="3x" rotation={90} />
      }
    ],
    properties: [
      {
        name: "icon",
        type: "string | string[]",
        desc: "The icon name"
      },
      {
        name: "size",
        type: 'string | "1x"',
        desc: 'The icon size, (min: "1x", max: "10x")'
      },
      {
        name: "color",
        type: "string",
        desc: "The icon color"
      },
      {
        name: "spin",
        type: "bool | false",
        desc: "Spin if true"
      },
      {
        name: "pulse",
        type: "bool | false",
        desc: "Pulse if true"
      },
      {
        name: "fixedWidth",
        type: "bool | false",
        desc: "Fix the icon width if true"
      },
      {
        name: "border",
        type: "bool | false",
        desc: "Fix the icon width if true"
      },
      {
        name: "inverse",
        type: "bool | false",
        desc: "Inverse the icon if true"
      },
      {
        name: "pull",
        type: 'string | ["left" | "right" ]',
        desc: "Pull the icon on left|right"
      },
      {
        name: "flip",
        type: 'string | ["horizontal" | "vertical" | "both"]',
        desc: "Flip the icon according to the direction"
      },
      {
        name: "rotation",
        type: "number",
        desc: "Rotate the icon according to the degree provided"
      }
    ],
    references: {
      children: (
        <ul>
          <li>
            <a
              href="https://github.com/FortAwesome/react-fontawesome"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-fontawesome
            </a>
          </li>
        </ul>
      )
    }
  };

  return (
    <View
      title={_iconView.title}
      sections={_iconView.sections}
      properties={_iconView.properties}
      {...props}
    />
  );
};

export default IconView;
