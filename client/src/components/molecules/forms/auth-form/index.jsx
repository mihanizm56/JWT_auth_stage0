import React from "react";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { renderTextField } from "../../../atoms";
import { nullFunc } from "../../../../utils";
import "./AuthForm.css";

export const AuthForm = props => {
	const { signInUser, handleSubmit, normalizeEmail, normalizePassword, onSubmit } = props;

	return (
		<div className="auth-form-wrapper">
			<form onSubmit={handleSubmit} className="auth-form">
				<h1 className="auth-form__title">Войти</h1>
				<div className="form__field">
					<Field
						name="email"
						type="text"
						component={renderTextField}
						normalize={normalizeEmail}
						label="Имя пользователя *"
					/>
				</div>
				<div className="form__field">
					<Field
						name="password"
						type="password"
						normalize={normalizePassword}
						component={renderTextField}
						label="Пароль *"
					/>
				</div>
				<div className="auth-form__button">
					<Button type="submit">Войти</Button>
				</div>
			</form>
		</div>
	);
};

AuthForm.defaultProps = {
	handleSubmit: nullFunc,
};
