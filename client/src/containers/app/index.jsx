import React, { memo } from "react";
import { MainWrapper } from "../../components";
import "./App.css";

export const App = memo(() => {
	return (
		<div className="global-wrapper">
			<MainWrapper />
		</div>
	);
});
