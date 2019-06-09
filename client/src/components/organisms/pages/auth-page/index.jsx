import React from "react";
import { AuthForm } from "../../../molecules";
import { AuthStoreProvider, AuthFormProvider } from "../../../../containers";
import "./auth-page.css";

export const AuthPage = () => {
	return (
		<div className="auth-page">
			<AuthFormProvider>
				<AuthForm />
			</AuthFormProvider>
		</div>
	);
};
