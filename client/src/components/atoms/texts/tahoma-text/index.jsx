//
import React, { Node, createRef } from "react";
import classNames from "classnames";
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

export const TahomaText = ({ text, inlineStyles, classname }: TahomaTextProps): Node => {
	return (
		<p
			style={{ ...inlineStyles }}
			className={classNames(`tahoma-text ${classname ? `tahoma-text--${classname}` : ""}`)}
		>
			{text}
		</p>
	);
};

TahomaText.defaultProps = {
	text: "default Tahoma text",
};
