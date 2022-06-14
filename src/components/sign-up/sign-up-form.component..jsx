import { useState } from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
const defaultFormFields = {
	isplayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Password do not match");
			return;
		}
		try {
			const { user } = createAuthUserWithEmailAndPassword(email, password);
			var response = await createUserDocumentFromAuth(
				{ user },
				{ displayName },
			);
			console.log(response);
			resetFormFields();
		} catch (error) {
			debugger;
			if (error.code === "auth/email-already-in-use") {
				alert("cannot create user , emailalready in use");
			}
			console.log("Error while registering user", error.message);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<div className="sign-up-container">
			<span>Don't have an account?</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}></FormInput>

				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}></FormInput>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}></FormInput>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}></FormInput>
				<Button buttonType="google" type="Submit">
					Signup!
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
