import React, { Component } from "react";
import { createPortal } from "react-dom";
export class ModalPortal extends Component {
	constructor() {
		super();

		this.id = "modal";
		this.div = document.createElement("div");
		this.div.id = this.id;

		document.body.insertAdjacentElement("beforeend", this.div);
	}

	componentWillUnmount() {
		this.div.parentNode.removeChild(this.div);
	}

	render() {
		const { show, children } = this.props;
		return show ? createPortal(children, document.getElementById(this.id)) : null;
	}
}
