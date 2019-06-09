//
import React, { Node, createRef } from "react";
import "./TahomaText.css";

// type TahomaTextProps = {
// 	text: string,
// 	bold?: boolean,
// 	classname?: string,
// 	hovered?: boolean,
// 	inlineStyles?: Object,
// 	ligth?: boolean,
// 	title?: string,
// 	needRef?: boolean,
// 	handleClick?: Function,
// 	withRefClick?: Function,
// };

export const TahomaText = ({ text, inlineStyles }: TahomaTextProps): Node => {
	return (
		<p style={{ ...inlineStyles }} className="tahoma-text">
			{text}
		</p>
	);
};

TahomaText.defaultProps = {
	text: "default Tahoma text",
};
