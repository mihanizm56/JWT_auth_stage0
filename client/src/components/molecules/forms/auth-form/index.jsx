import React from "react";
import { Field } from "redux-form";
import { noop } from "lodash/noop";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { renderTextField } from "../../../atoms";

import "./auth-form.css";

export const AuthForm = props => {
	const { signInUser, handleSubmit, normalizeText, onSubmit } = props;

	return (
		<div className="form-wrapper">
			<form onSubmit={handleSubmit} className="form">
				<h1 className="form__title">Войти</h1>
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
				<div className="form__button form__button--create">
					<Button component={NavLink} to="/login" style={{ fontSize: "10px" }}>
						Создать нового пользователя
					</Button>
				</div>
			</form>
		</div>
	);
};

AuthForm.defaultProps = {
	handleSubmit: noop,
};
