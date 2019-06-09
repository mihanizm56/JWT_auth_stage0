//
import React, { Node, createRef } from "react";
import "./VerdanaText.css";

export const VerdanaText = (props: VerdanaTextProps): Node => {
	const { text, inlineStyles } = props;

	return (
		<p style={{ ...inlineStyles }} className="verdana-text">
			{text}
		</p>
	);
};

VerdanaText.defaultProps = {
	text: "default Verdana text",
};
