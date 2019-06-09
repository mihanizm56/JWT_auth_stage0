import React, { memo } from "react";
import { SVGIcon } from "..";
import { getClass } from "../../../../utils";
import "./interactive-svg-icon.css";

export const InteractiveSVGIcon = memo(({ icon, handleClick, noOpacityChange }) => {
	return (
		<div className="interactive-icon-wrapper">
			<SVGIcon icon={icon} />
			<div className="click-wrapper" onClick={handleClick} />
		</div>
	);
});

InteractiveSVGIcon.defaultProps = {
	icon: "",
	handleClick: () => {},
};
