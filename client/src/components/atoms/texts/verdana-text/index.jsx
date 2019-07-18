//
import React, { Node, createRef } from "react";
import classNames from "classnames";
import "./VerdanaText.css";

export const VerdanaText = (props: VerdanaTextProps): Node => {
	const { text, inlineStyles, classname } = props;
	return (
		<p
			style={{ ...inlineStyles }}
			className={classNames(`verdana-text ${classname ? `verdana-text--${classname}` : ""}`)}
		>
			{text}
		</p>
	);
};

VerdanaText.defaultProps = {
	text: "default Verdana text",
};
