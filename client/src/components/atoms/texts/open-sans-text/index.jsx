// @flow
import React, { createRef } from "react";
import "./OpenSansText.css";

export const OpenSansText = ({ text, inlineStyles }: OpenSansTextProps) => {
	return (
		<p style={{ ...inlineStyles }} className="open-sans-text">
			{text}
		</p>
	);
};

OpenSansText.defaultProps = {
	text: "default OpenSans text",
};
