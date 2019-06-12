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
		const { children } = this.props;
		return createPortal(children, document.getElementById(this.id));
	}
}
