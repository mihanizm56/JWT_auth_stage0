// @flow
import React, { createRef } from "react";
import classNames from "classnames";
import "./OpenSansText.css";

export const OpenSansText = ({ text, inlineStyles, classname }: OpenSansTextProps) => {
	return (
		<p
			style={{ ...inlineStyles }}
			className={classNames(`open-sans-text ${classname ? `open-sans-text--${classname}` : ""}`)}
		>
			{text}
		</p>
	);
};

OpenSansText.defaultProps = {
	text: "default OpenSans text",
};
