import React from "react";
import { Link } from "react-router-dom";
import { UserButton } from "../../../../components";
import { AuthStoreProvider } from "../../../../containers";
import "./Header.css";

export const Header = () => {
	return (
		<div className="header-wrapper">
			<h2 className="header__title">Loft-Taxi</h2>
			<div className="header-button-box">
				<AuthStoreProvider>
					<UserButton />
				</AuthStoreProvider>
			</div>
		</div>
	);
};
