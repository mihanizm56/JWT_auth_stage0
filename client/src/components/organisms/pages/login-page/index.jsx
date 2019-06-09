import React from "react";
import { AuthForm } from "../../../molecules";
import { AuthStoreProvider, AuthFormProvider } from "../../../../containers";
import "./LoginPage.css";

export const LoginPage = () => {
	return (
		<div className="layout-page">
			<AuthStoreProvider>
				<AuthFormProvider>
					<AuthForm />
				</AuthFormProvider>
			</AuthStoreProvider>
		</div>
	);
};
