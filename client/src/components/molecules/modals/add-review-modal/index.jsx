import React from "react";
import { Field } from "redux-form";
import { noop } from "lodash/noop";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { renderTextField } from "../../../atoms";

import "./auth-review-modal.css";

export const ModalAddReview = props => {
	const { signInUser, handleSubmit, normalizeText, onSubmit } = props;

	return (
		<div className="review-modal-layout">
			<div className="form-wrapper review-modal-wrapper">
				<form onSubmit={handleSubmit} className="form form--review">
					<h1 className="form__title">Оставить отзыв</h1>
					<div className="form__field">
						<Field name="user" component={renderTextField} normalize={normalizeText} label="Имя пользователя *" />
					</div>
					<div className="form__field">
						<Field name="login" component={renderTextField} normalize={normalizeText} label="Логин пользователя *" />
					</div>
					<div className="form__field">
						<Field
							name="review"
							normalize={normalizeText}
							rows={6}
							multiline
							component={renderTextField}
							placeholder="Напишите ваш отзыв"
							variant="outlined"
						/>
					</div>
					<div className="form__button">
						<Button type="submit">Отправить</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

ModalAddReview.defaultProps = {
	handleSubmit: noop,
};
