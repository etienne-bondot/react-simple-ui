import React, { Component, Fragment } from "react";

import View from "../View";
import Button from "../../components/button/Button";
import Dialog from "../../components/dialog/Dialog";

class DialogView extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.openDialog = this.openDialog.bind(this);
  }

  openDialog(val) {
    this.setState({ show: val });
  }

  render() {
    const _dialogView = {
      title: "Dialog",
      sections: [
        {
          title: "Component",
          desc: (
            <p>
              A simple popup that shows only when the{" "}
              <span className="Code">show</span> property is{" "}
              <span className="Code">true</span>.
            </p>
          ),
          children: (
            <Fragment>
              <Button
                style={{ marginRight: "1em" }}
                onClick={() => this.openDialog(true)}
              >
                click to open
              </Button>
              <Dialog
                show={this.state.show}
                onClose={() => this.openDialog(false)}
              >
                <h1>Default Dialog</h1>
                <p>Content here.</p>
              </Dialog>
            </Fragment>
          )
        }
      ],
      properties: [
        {
          name: "onClose",
          type: "func",
          desc: "Fired when the dialog is closed"
        },
        {
          name: "show",
          type: "bool | false",
          desc: "Show or hide the dialog"
        },
        {
          name: "children",
          type: "node",
          desc: "The content of the dialog"
        }
      ]
    };

    return (
      <View
        title={_dialogView.title}
        sections={_dialogView.sections}
        properties={_dialogView.properties}
        {...this.props}
      />
    );
  }
}

export default DialogView;
