import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { AuthStoreProvider } from "../../../../containers/auth";
import { Header } from "../header";
import "./MainWrapper.css";

export const MainWrapper = memo(() => {
	return (
		<div className="main-wrapper">
			<Header />
			<AuthStoreProvider>
				<MainLayout />
			</AuthStoreProvider>
		</div>
	);
});
