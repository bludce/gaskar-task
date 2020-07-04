import React from "react";
import "./Modal.sass";

export default class Modal extends React.Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <div className="modal__wrap">
          <div className="modal__content">{this.props.children}</div>
          <div className="modal__close" onClick={this.onClose}>
            X
          </div>
        </div>
      </div>
    );
  }
}