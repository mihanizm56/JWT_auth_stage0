import React from "react";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { renderTextField } from "../../../atoms";
import { noop } from "lodash/noop";
import "./login-form.css";

export const LoginForm = props => {
	const { signInUser, handleSubmit, normalizeText, onSubmit } = props;

	return (
		<div className="form-wrapper">
			<form onSubmit={handleSubmit} className="form">
				<h1 className="form__title">Войти</h1>
				<div className="form__field">
					<Field name="user" normalize={normalizeText} component={renderTextField} label="Имя пользователя" />
				</div>
				<div className="form__field">
					<Field name="login" component={renderTextField} normalize={normalizeText} label="Логин пользователя *" />
				</div>
				<div className="form__field">
					<Field
						name="password"
						type="password"
						normalize={normalizeText}
						component={renderTextField}
						label="Пароль *"
					/>
				</div>
				<div className="form__button">
					<Button type="submit">Войти</Button>
				</div>
				<div className="form__button form__button--auth">
					<Button component={NavLink} to="/auth" style={{ fontSize: "10px" }}>
						Войти под существующим пользователем
					</Button>
				</div>
			</form>
		</div>
	);
};

LoginForm.defaultProps = {
	handleSubmit: noop,
};
