import React from "react";
import { LoginForm } from "../../../molecules";
import { LoginFormProvider } from "../../../../containers";
import "./login-page.css";

export const LoginPage = () => {
	return (
		<div className="login-page">
			<LoginFormProvider>
				<LoginForm />
			</LoginFormProvider>
		</div>
	);
};
