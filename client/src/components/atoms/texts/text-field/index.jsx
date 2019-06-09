import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({ value, input, label, meta: { touched, invalid, error }, ...custom }) => (
	<TextField
		fullWidth={true}
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);
