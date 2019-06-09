//
import React, { memo } from "react";
import { InteractiveSVGIcon } from "../../svgComponents";
import "./icon-button.css";

type IconButtonPropsType = {
	handleClick: () => void,
	classname: string,
	noOpacityChange?: boolean,
	icon?: string,
};

export const IconButton = memo(({ classname, noOpacityChange, handleClick, icon }: IconButtonPropsType) => {
	return (
		<div onClick={handleClick} className={classname}>
			<InteractiveSVGIcon icon={icon} noOpacityChange={noOpacityChange} />
		</div>
	);
});

IconButton.defaultProps = {
	handleClick: () => {},
};
