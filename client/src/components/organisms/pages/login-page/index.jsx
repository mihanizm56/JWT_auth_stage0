import React from "react";
import { AuthForm } from "../../../molecules";
import { LoginStateProvider, AuthFormProvider } from "../../../../containers";
import "./LoginPage.css";

export const LoginPage = () => {
	return (
		<div className="layout-page">
			<LoginStateProvider>
				<AuthFormProvider>
					<AuthForm />
				</AuthFormProvider>
			</LoginStateProvider>
		</div>
	);
};
