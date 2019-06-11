import React, { memo } from "react";
import { MainLayout } from "../../../../routes";
import { AuthStoreProvider } from "../../../../containers/auth";
import { Header } from "../header";
import "./MainWrapper.css";
import { ModalPortal } from "../../../../containers";
import { ModalAddReview } from "../../../molecules/modals/add-review-modal";

export const MainWrapper = memo(() => {
	return (
		<div className="main-wrapper">
			<Header />
			{/* <AuthStoreProvider>
				<MainLayout />
			</AuthStoreProvider> */}
			<ModalPortal>
				<ModalAddReview />
			</ModalPortal>
		</div>
	);
});
