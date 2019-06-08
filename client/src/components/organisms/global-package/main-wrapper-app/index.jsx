import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { LoginStateProvider } from "../../../../containers/auth";
import "./MainWrapper.css";

export const MainWrapper = memo(() => {
	return (
		<div className="main-wrapper">
			<LoginStateProvider>
				<MainLayout />
			</LoginStateProvider>
		</div>
	);
});
