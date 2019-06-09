//
import React from "react";
import "./svg-icon.css";
import MediaQuery from "react-responsive";
import { SVGComponent } from "..";
import { getIcon } from "../../../../utils";

export const SVGIcon = ({ icon }: SVGIconProps) => {
	const iconPath = getIcon(`icon-${icon}`);

	return <SVGComponent path={iconPath} />;
};
