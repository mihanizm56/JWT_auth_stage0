import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { AuthStoreProvider } from "../../../../containers/auth";
import "./MainWrapper.css";

export const MainWrapper = memo(() => {
	return (
		<div className="main-wrapper">
			<AuthStoreProvider>
				<MainLayout />
			</AuthStoreProvider>
		</div>
	);
});
